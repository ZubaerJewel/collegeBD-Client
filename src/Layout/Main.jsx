import { Outlet } from "react-router-dom";
import NavBar from "../Pages/Home/Home/NavBar";
import{ Toaster } from 'react-hot-toast';
import Footer from "../Pages/Home/Home/Footer";

const Main = () => {
    return (
        <div className="  bg-purple-400">
            <NavBar></NavBar>
            <Outlet></Outlet>
            <Footer></Footer>
            <Toaster></Toaster>
            
        </div>
    );
};

export default Main;