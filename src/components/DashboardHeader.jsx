import { NavLink } from "react-router-dom";


const DashboardHeader = () => {
    return (
         <div className="text-center text-white pt-10 bg-[rgb(149,56,226)]">
            <h2 className="text-5xl text-center py-3">Dashboard</h2>
        <p>Explore the latest gadgets that will take your experience to the next level. From smart devices to the coolest accessories, we have it all!</p>
        <div className="space-x-3">
     <NavLink className={({ isActive }) => (isActive ? "border-white border rounded-2xl p-2 text-purple-500 bg-white" : "border-purple-500 border rounded-2xl p-2 text-white bg-purple-500")} to='/dashboard'>
     Cart
     </NavLink>
        <NavLink className={({ isActive }) => (isActive ? "border-white border rounded-2xl p-2 text-purple-500 bg-white" : "border-purple-500 border rounded-2xl p-2 text-white bg-purple-500")} to='wishlist'>Wishlist</NavLink>
        </div>
        </div>
       
     
    );
};

export default DashboardHeader;