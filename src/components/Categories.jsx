/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";

const Categories = ({category}) => {
    return (
        <div>
            <Link to='/category:/category'>{category.category}</Link>
        </div>
    );
};

export default Categories;