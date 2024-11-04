import { useLoaderData, useParams } from "react-router-dom";
import Card from "./Card";

const GadgetCards = () => {
    const data = useLoaderData()
    const { category } =useParams()
    console.log(data)
    return (
        <div>
            {/* {
                data.map(gadget => <Card gadget={gadget} key={gadget.product_id} />)
            } */}
        </div>
    );
};

export default GadgetCards;