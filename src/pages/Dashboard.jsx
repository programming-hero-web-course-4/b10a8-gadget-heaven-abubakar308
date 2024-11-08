import { Outlet, useLoaderData } from "react-router-dom";
import DashboardHeader from "../components/DashboardHeader";
import { useEffect } from "react";

const Dashboard = () => {
    const data = useLoaderData()
    useEffect(()=>{
        document.title = 'Dashboard';
    },[data])
    return (
        <div>
            <DashboardHeader />
            <Outlet />
        </div>
    );
};

export default Dashboard;