import { useLoaderData } from "react-router-dom";
import ReusabloeHeading from "../components/ReusabloeHeading";

const Brand = () => {
    const brandsdata = useLoaderData()
    return (
        <div>
            <ReusabloeHeading title='Our Brands' />
          <div className="m-10">
            <h2 className="text-2xl">Our Brands Name</h2>
          {
                brandsdata.map(data => <div className="m-5" key={data.brand_id}>
                    <p className="text-purple-600">{data.brand_name}</p>
                </div>)
            }
          </div>
        </div>
    );
};

export default Brand;