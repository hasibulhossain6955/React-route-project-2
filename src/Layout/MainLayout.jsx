import { Outlet } from "react-router-dom";
import Navbar from "../Component/Heder/Navbar/Navbar";


const MainLayout = () => {
    return (
        <div className=" mt-5 max-w-[1300px] mx-auto">
            <Navbar></Navbar>
            <div className="py-5">
            <Outlet></Outlet>
            </div>
        </div>
    );
};

export default MainLayout;