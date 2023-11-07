import Banner from "../../companent/Banner/Banner";
import Catagoreis from "../../companent/Catagoreis/Catagoreis";
import {Helmet} from "react-helmet";

const Home = () => {
    return (
        <div>
            <Helmet>
            <title>Career Pulse | Home</title>
            </Helmet>
            <Banner/>
            <div className="w-11/12 mx-auto">
                <Catagoreis/>
            </div>

        </div>
    );
};

export default Home;