import { Link } from "react-router-dom";


const DashboardHeader = () => {
    return (
       <div>
         <div className="text-center text-white pt-10 bg-[rgb(149,56,226)]">
            <h2 className="text-5xl text-center py-3">Dashboard</h2>
        <p>Explore the latest gadgets that will take your experience to the next level. From smart devices to the coolest accessories, we have it all!</p>
        <div>
     <Link to='cart'>
     <button className="bg-white rounded-2xl p-2 text-[rgb(149,56,226)]">Cart</button>
     </Link>
        <Link to='wishlist'>
        <button className="bg-white rounded-2xl p-2 text-[rgb(149,56,226)]">Wishlist</button></Link>
        </div>
        </div>
        <div className="flex justify-between">
                <h3>Cart</h3>
                <div className="flex gap-4">
                    <h3>Total Cost</h3>
                    <button>Sot by Price</button>
                    <button>Puchase</button>
                </div>
            </div>
       </div>
        
    );
};

export default DashboardHeader;