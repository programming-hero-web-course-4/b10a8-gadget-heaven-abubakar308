/* eslint-disable react/prop-types */

import { Link } from "react-router-dom";

const Categories = ({category}) => {
    return (
        <div className="bg-gray-200  rounded-2xl w-full p-2">
            <Link  to={`/category/${category.category}`}>{category.category}</Link>
        </div>
    );
};

export default Categories;