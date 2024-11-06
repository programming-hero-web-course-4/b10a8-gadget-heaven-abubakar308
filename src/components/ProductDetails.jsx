import { useLoaderData } from "react-router-dom";
import { CiShoppingCart, CiHeart } from "react-icons/ci";
import ReusabloeHeading from "./ReusabloeHeading";

const ProductDetails = () => {
    const product = useLoaderData()
    const {product_title, product_image, price, product_id, description, specification,rating} = product;
    return (
<div>
    <div className="pb-40 bg-[rgb(149,56,226)]"><ReusabloeHeading title='Product Details' /></div>
<div className="card card-side bg-base-100 -mt-40 shadow-xl w-10/12 mx-auto">
  <figure>
    <img className="w-96 rounded-2xl p-4"
      src={product_image}
      alt={product_title} />
  </figure>
  <div className="card-body">
    <h2 className="card-title">{product_title}</h2>
    <p>Price: {price}</p>
    <p>in stosk</p>
    <p>{description}</p>
    <h3>Specifications:</h3>
      <ol className="list-decimal">
        {specification.map((spec, index) => (
          <li key={index}>{spec}</li>
        ))}
      </ol>
      <h2>Rating</h2>
      <p>{rating}</p>
    <div className="card-actions">
      <button className="btn btn-primary">Add To Cart <CiShoppingCart /></button>
      <button className="text-3xl bg-slate-50 rounded-full p-2 border" to='heart'><CiHeart /></button>
    </div>
  </div>
</div>
</div>
    );
};

export default ProductDetails;