import { useLoaderData } from "react-router-dom";

const Dashboard = () => {
    const data = useLoaderData()
    console.log(data)
    return (
        <div>
            <p>This is dashboard</p>
        </div>
    );
};

export default Dashboard;