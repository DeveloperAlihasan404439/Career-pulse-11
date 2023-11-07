import Banner from "../../companent/Banner/Banner";
import Catagoreis from "../../companent/Catagoreis/Catagoreis";


const Home = () => {
    return (
        <div className=" ">
            <Banner/>
            <div className="w-11/12 mx-auto">
                <Catagoreis/>
            </div>

        </div>
    );
};

export default Home;