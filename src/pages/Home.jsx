import { useLoaderData } from "react-router-dom";
import Banner from "../components/Banner";
import Header from "../components/Header";
import Categories from "../components/Categories";
import GadgetCards from "../components/GadgetCards";

const Home = () => {
    const categories = useLoaderData()
    return (
        <div>
            <Header />
            <Banner />
          <div className="md:flex justify-between">
          <div>
          {
            categories.map(category => <Categories key={category.product_id} category={category} />)
           }
          </div>
           <GadgetCards />
          </div>
        </div>
    );
};

export default Home;