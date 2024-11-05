import { useEffect, useState } from "react";
import Card from "./Card";

const GadgetCards = () => {
    const [gadgets, setGadgets] = useState([]);
    useEffect((()=>{
        fetch('../../public/gadgets.json')
        .then(res=>res.json())
        .then(data=>setGadgets(data))
    }),[])

    return (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {
                gadgets.map(gadget => <Card gadget={gadget} key={gadget.product_id} />)
            }
        </div>
    );
};

export default GadgetCards;