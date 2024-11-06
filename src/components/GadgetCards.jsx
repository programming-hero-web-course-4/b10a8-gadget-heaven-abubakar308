import { useEffect, useState } from "react";
import Card from "./Card";
import { useLoaderData, useParams } from "react-router-dom";

const GadgetCards = () => {
    const { category } = useParams()
    console.log(category)
    const gadgets = useLoaderData()
    const [gadget, setGadget] = useState([]);
    useEffect( () => {
      if(category === 'All Products' || !category){
        setGadget(gadgets)
      }
      else{
        const filteredByCategory = [...gadgets].filter(gadget => gadget.category === category);
      setGadget(filteredByCategory)
      }
    },[category,gadgets]);
    

    return (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {
              gadget.length === 0 ? <p>No data Found</p> :
              gadget.map(gadget => <Card gadget={gadget} key={gadget.product_id} />)
            }
        </div>
    );
};

export default GadgetCards;