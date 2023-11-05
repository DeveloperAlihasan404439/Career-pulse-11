import { useContext } from "react";
import { AuthContext } from "../AuthProvider/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";
import LoginLoding from "../LoginLoding/LoginLoding";
const ProviteRout = () => {
    const location = useLocation();
    const { user, loading } = useContext(AuthContext);
    if (user) {
      return children;
    }
    if (loading) {
      return <LoginLoding/>
    }
    return <Navigate state={location.pathname} to="/singin" />;
};

export default ProviteRout;