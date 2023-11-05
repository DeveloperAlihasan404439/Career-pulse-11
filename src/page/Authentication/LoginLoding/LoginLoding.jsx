import login from './UserLogin.json'
import Lottie from "lottie-react";
const LoginLoding = () => {
    return (
        <div className="bg-[#142F5C] w-full h-full flex justify-center">
          <div className="w-[300px]">
            <Lottie animationData={login} loop={true} />
          </div>
        </div>
    );
};

export default LoginLoding;