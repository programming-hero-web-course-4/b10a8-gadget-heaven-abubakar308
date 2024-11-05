/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";

const Categories = ({category}) => {
    return (
        <div className="flex flex-col items-center justify-center">
            <Link to='/category:/category'>{category.category}</Link>
        </div>
    );
};

export default Categories;