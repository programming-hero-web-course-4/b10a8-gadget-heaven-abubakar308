import { Outlet, useLoaderData } from "react-router-dom";
import DashboardHeader from "../components/DashboardHeader";

const Dashboard = () => {
    const data = useLoaderData()
    console.log(data)
    return (
        <div>
            <DashboardHeader />
            <Outlet />
        </div>
    );
};

export default Dashboard;