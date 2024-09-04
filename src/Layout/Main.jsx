import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";


const Main = () => {
    return (
        <div className="bg-[#F5F5F5]">
            <Navbar/>
            <Outlet />
            <Footer/>
        </div>
    );
};

export default Main;