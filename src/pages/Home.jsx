import { Outlet, useLoaderData } from "react-router-dom";
import Banner from "../components/Banner";
import Categories from "../components/Categories";
import Heading from "../components/Heading";

const Home = () => {
    const categories = useLoaderData()
    return (
        <div>
            <Heading title='Upgrade Your Tech Accessorize with Gadget Heaven Accessories' />
            <Banner />
            <h2 className="text-3xl text-center py-4 font-semibold">Explore Cutting-Edge Gadgets</h2>
          <div className="md:flex justify-between my-5 gap-4 w-11/12 mx-auto">
          <div>
            <div className="flex flex-col col gap-2 w-full bg-gray-300 rounded-2xl p-4">
          {
            categories.map(category => <Categories key={category.category} category={category} />)
           }
          </div>
          </div>
           <Outlet />
          </div>
        </div>
    );
};

export default Home;