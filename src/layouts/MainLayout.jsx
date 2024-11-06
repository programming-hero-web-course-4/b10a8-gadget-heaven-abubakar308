import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Toaster } from 'react-hot-toast';


const MainLayout = () => {
    return (
        <div>
            <Toaster />
            <Navbar />
            <div className="min-h-[calc(100vh-370px)]">
            <Outlet />
            </div>
          <Footer />
        </div>
    );
};

export default MainLayout;