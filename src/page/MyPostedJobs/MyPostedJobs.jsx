import axios from "axios";
import { useContext, useEffect } from "react";
import { AuthContext } from "../Authentication/AuthProvider/AuthProvider";
import BannerShared from "../../shared/BannerShared/BannerShared";

const MyPostedJobs = () => {
  const { user } = useContext(AuthContext);
  useEffect(() => {
    axios
      .get(`http://localhost:5000/catagory?email=${user?.email}`)
      .then((res) => {
        console.log(res.data);
      });
  }, [user]);
  return (
    <div className="bg-base-200">
        <BannerShared url='https://i.ibb.co/1q5kjTT/Web-Development-Manager.png' title="My Posted Jobs" catagory="My Jobs" />
      <div className="overflow-x-auto w-11/12 mx-auto min-h-screen">
        
      </div>
    </div>
  );
};

export default MyPostedJobs;
