import { useEffect, useState } from "react";
import { getAllCards } from "../utility/cart";
import { GoSortAsc, } from "react-icons/go";
import { RxCrossCircled } from "react-icons/rx";

const Cart = () => {
    const [gadget,setGadget] = useState([]);
    useEffect(() =>{
        const addedCard = getAllCards();
        setGadget(addedCard)
    },[]);
    const handleSorting = () =>{
       const sortData =  [...gadget].sort((a,b)=>b.price - a.price);
       console.log(sortData)
        setGadget(sortData)
    }

    const totalCost = gadget.reduce((acc, item) => acc + item.price, 0);
    return (
<div className="w-11/12 mx-auto my-5">
<div className="flex justify-between ">
                <h3 className="text-xl font-semibold">Cart</h3>
                <div className="flex items-center gap-4">
                    <h3 className="font-semibold text-xl">Total Cost: ${totalCost}</h3>
                    <button className="flex items-center gap-2 text-purple-500 p-2 border rounded-3xl border-purple-500" onClick={handleSorting}>Sot by Price <GoSortAsc />
                    </button>
                    <button className="text-white bg-purple-600 p-2 rounded-3xl">Puchase</button>
                </div>
            </div>
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
               <button className="text-red-500 text-2xl"><RxCrossCircled /></button> 
               </div>)
            }
            </div>
</div>
    );
};

export default Cart;