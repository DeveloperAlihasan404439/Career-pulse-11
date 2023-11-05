import loding from './loding.json'
import Lottie from 'lottie-react'
const Loding = () => {
    return (
        <div className='h-screen w-full flex justify-center items-center'>
            <Lottie
                animationData={loding}
                loop={true}
                className="w-full"
              />
        </div>
    );
};

export default Loding;