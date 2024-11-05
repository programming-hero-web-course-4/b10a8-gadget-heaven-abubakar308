/* eslint-disable react/prop-types */

import { Link } from "react-router-dom";

const Card = ({gadget}) => {
    const {product_title, product_image, price, product_id} = gadget;
    return (
        <div className="card bg-base-100 w-full h-80 p-2 shadow-xl">
        <figure>
          <img className="h-full rounded-2xl p-2"
            src={product_image}
            alt={product_title} />
        </figure>
        <div className="card-body">
          <h2 className="card-title">
            {product_title}
          </h2>
          <p>Price: {price}</p>
          <div className="card-actions justify-start">
         <Link to={`/details/${product_id}`}> <button className="badge badge-outline">View Details</button></Link>
          </div>
        </div>
      </div>
    );
};

export default Card;