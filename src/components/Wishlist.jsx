import { useEffect, useState } from "react";
import { getAllWishLists } from "../utility/wishlist";
import { RxCrossCircled } from "react-icons/rx";


const Wishlist = () => {
    const [gadget,setGadget] = useState([]);
    useEffect(() =>{
        const addedWishlist = getAllWishLists();
        setGadget(addedWishlist)
    },[]);

    return (
        <div className="m-10">
            <h2 className="text-xl font-semibold">wishllist</h2>
            <div className="my-5 space-y-4">
            {
              gadget.map(gadget => <div key={gadget.product_id} className="flex justify-between  bg-gray-300 rounded-2xl p-10">
                <div className="flex gap-6 items-center">
                   <img className="rounded-2xl h-12 w-12" src={gadget.product_image} alt={gadget.product_title} />
                  <div>
                  <h3 className='text-xl font-semibold'>{gadget.product_title}</h3>
                  <p>{gadget.description}</p>
                  <p><span className='text-xl font-semibold'>Price :${gadget.price}</span> </p>
                  </div>
               </div>
               <button className="text-red-500 text-2xl"><RxCrossCircled /> </button> 
               </div>)
            }
            </div>
        </div>
    );
};

export default Wishlist;