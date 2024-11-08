/* eslint-disable react/prop-types */

import { NavLink } from "react-router-dom";

const Categories = ({category}) => {
    return (
        <div className="bg-gray-200  rounded-2xl p-2">
            <NavLink  to={`/category/${category.category}`} className={({ isActive }) => (isActive ? "bg-purple-500 rounded-2xl p-1" : "")}>{category.category}</NavLink>
        </div>
    );
};

export default Categories;