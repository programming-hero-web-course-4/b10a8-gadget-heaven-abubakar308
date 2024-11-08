/* eslint-disable react-refresh/only-export-components */
import { useLoaderData } from "react-router-dom";
import { CiShoppingCart, CiHeart } from "react-icons/ci";
import ReusabloeHeading from "../components/ReusabloeHeading";
import { addCard, } from "../utility/cart";
import { addWishList } from "../utility/wishlist";
import { useEffect } from "react";
const ProductDetails = () => {
    const product = useLoaderData()
    const {product_title, product_image, price, description, specification,rating} = product;
    
    
    useEffect(()=>{
      document.title = `${product_title}`;
  },[product_title])
    const handleCart = (product) =>{
      addCard(product)
    };
    const handleWishList = (product) =>{
      addWishList(product)
    };

    return (
<div>
    <div className="pb-40 bg-[rgb(149,56,226)]"><ReusabloeHeading title='Product Details' /></div>
<div className="card card-side bg-base-100 -mt-40 mb-8 shadow-xl w-10/12 mx-auto">
  <figure>
    <img className="w-96 rounded-2xl p-4"
      src={product_image}
      alt={product_title} />
  </figure>
  <div className="card-body">
    <h2 className="card-title text-2xl">{product_title}</h2>
    <p className="text-xl font-semibold">Price: {price}</p>
    <span className="w-20 p-2 rounded-3xl bg-green-100 text-green-400">in stosk</span>
    <p className="text-[rgba(9,8,15,0.6)]">{description}</p>
    <h3 className="text-xl font-semibold">Specifications:</h3>
      <ol className="list-decimal">
        {specification.map((spec, index) => (
          <li className="text-[rgba(9,8,15,0.6)]" key={index}>{spec}</li>
        ))}
      </ol>
      <h2>Rating</h2>
     <div className="flex gap-3">
     <div className="rating">
  <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
  <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
  <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
  <input
    type="radio"
    name="rating-2"
    className="mask mask-star-2 bg-orange-400"
    defaultChecked />
  <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
 
 
</div>
      <span className="bg-gray-100 rounded-2xl px-2">{rating}</span>
     </div>
    <div className="card-actions">
      <button onClick={() => handleCart(product)}  className="btn rounded-3xl text-white bg-[rgb(149,56,226)]">Add To Cart <CiShoppingCart /></button>
      <button onClick={() => handleWishList(product)} className="text-3xl rounded-full p-2 border" to='heart'><CiHeart /></button>
    </div>
  </div>
</div>
</div>
    );
};

export default ProductDetails;