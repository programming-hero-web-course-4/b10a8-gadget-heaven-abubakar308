import { useEffect, useState } from "react";
import { getAllCards } from "../utility/cart";

const Cart = () => {
    
    const [gadget,setGadget] = useState([])
    useEffect(() =>{
        const addedCard = getAllCards();
        setGadget(addedCard)
    },[]);
    const handleSorting = () =>{
       const sortData =  [...gadget].sort((a,b)=>a.pricce - b.price);
       console.log(sortData)
        setGadget(gadget)
    }
    return (
<div className="w-11/12 mx-auto my-5">
<div className="flex justify-between ">
                <h3>Cart</h3>
                <div className="flex gap-4">
                    <h3>Total Cost {}</h3>
                    <button onClick={handleSorting}>Sot by Price</button>
                    <button>Puchase</button>
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
               <button><svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#5f6368"><path d="M280-120q-33 0-56.5-23.5T200-200v-520h-40v-80h200v-40h240v40h200v80h-40v520q0 33-23.5 56.5T680-120H280Zm400-600H280v520h400v-520ZM360-280h80v-360h-80v360Zm160 0h80v-360h-80v360ZM280-720v520-520Z"/></svg></button> 
               </div>)
            }
            </div>
</div>
    );
};

export default Cart;