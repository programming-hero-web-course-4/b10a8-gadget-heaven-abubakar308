import { useEffect, useState } from "react";
import { getAllCards } from "../utility/cart";
import { GoSortAsc, } from "react-icons/go";
import { RxCrossCircled } from "react-icons/rx";
import group from '../assets/Group.png'
import { useNavigate } from "react-router-dom";

const Cart = () => {
    useEffect(()=>{
        document.title = 'Cart-GadgetHeaven';
    },[]);

    useEffect(() =>{
        const addedCard = getAllCards();
        setGadget(addedCard)
    },[]);

    const [gadget,setGadget] = useState([]);
    const [showCost, setShowCost] = useState(0)
    const navigate = useNavigate()
    const handleSorting = () =>{
       const sortData =  [...gadget].sort((a,b)=>b.price - a.price);
       console.log(sortData)
        setGadget(sortData)
    }

    const handlePurshase = () => {
     
      const showCost = gadget.reduce((acc, item) => acc + item.price, 0);
      setShowCost(showCost)

      setGadget([]);
      
    }
 
    const totalCost = gadget.reduce((acc, item) => acc + item.price, 0);

    const handleClose = () => {
      navigate('/');
    }
  
    return (
<div className="w-11/12 mx-auto my-5">
<div className="flex justify-between ">
                <h3 className="text-xl font-semibold">Cart</h3>
                <div className="flex items-center gap-4">
                    <h3 className="font-semibold text-xl">Total Cost: ${totalCost.toFixed(2)}</h3>
                    <button className="flex items-center gap-2 text-purple-500 p-2 border rounded-3xl border-purple-500" onClick={handleSorting}>Sot by Price <GoSortAsc />
                    </button>
                    <button onClick={handlePurshase}  disabled={gadget.length === 0 || totalCost === 0} className="btn text-white bg-purple-600 p-2 rounded-3xl"> <a href="#my_modal_8">Purchase</a></button>
                   
                    <div  className="modal text-center" role="dialog" id="my_modal_8">
  <div className="modal-box">
<div className="flex justify-center">   <img src={group} alt="" /></div>
    <h3 className="text-lg font-bold">Payment Successfull</h3>
    <p className="py-4">Thanks for purchasing. <br />
    Total: {showCost.toFixed(2)}</p>
    <div className="modal-action">
      <button onClick={handleClose} className="btn w-full">Close</button>
    </div>
  </div>
</div>
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