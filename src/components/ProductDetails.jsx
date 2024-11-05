import { useLoaderData } from "react-router-dom";

const ProductDetails = () => {
    const product = useLoaderData()
    const {product_title, product_image, price, product_id} = product;
    console.log(price)
    return (
<div className="card card-side bg-base-100 shadow-xl">
  <figure>
    <img
      src="https://img.daisyui.com/images/stock/photo-1635805737707-575885ab0820.webp"
      alt="Movie" />
  </figure>
  <div className="card-body">
    <h2 className="card-title">Product {product_title}</h2>
    <p>Click the button to watch on Jetflix app.</p>
    <div className="card-actions justify-end">
      <button className="btn btn-primary">Watch</button>
    </div>
  </div>
</div>
    );
};

export default ProductDetails;