
import { useLoaderData } from "react-router-dom";
import Banner from "../Component/Heder/Banner/Banner";
import Phones from "../Component/Phones/Phones";

const Home = () => {

const phones=useLoaderData()


    return (
        <div>
            <Banner></Banner>
            <Phones phones={phones}></Phones>
        </div>
    );
};

export default Home;