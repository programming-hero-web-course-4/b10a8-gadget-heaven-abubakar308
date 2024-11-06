// import { useContext, useEffect, useState } from "react";
import Card from "./Card";
// import { categoryContex } from "./Categories";
import { useLoaderData, useParams } from "react-router-dom";

const GadgetCards = () => {
    const category = useParams()
    console.log(category)
    const gadgets = useLoaderData()
    console.log(gadgets)

    // const [gadgets, setGadgets] = useState([]);
    // useEffect((()=>{
    //     fetch('../gadgets.json')
    //     .then(res=>res.json())
    //     .then(data=>setGadgets(data))
    // }),[])

    return (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4"> hi
            {
                gadgets.map(gadget => <Card gadget={gadget} key={gadget.product_id} />)
            }
        </div>
    );
};

export default GadgetCards;