import { Link } from "react-router-dom";
import { CiShoppingCart, CiHeart } from "react-icons/ci";

const Navbar = () => {
    return (
<div className="navbar bg-base-100">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M4 6h16M4 12h8m-8 6h16" />
        </svg>
      </div>
      <ul
        tabIndex={0}
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
       <Link to='/' role="tab">Home</Link>
  <Link to='/statistics' role="tab">Statistics</Link>
  <Link to='/dashboard' role="tab">Dashboard</Link>
  <Link to='/brand' role="tab">Brand</Link>
      </ul>
    </div>
    <Link to='/' className="btn btn-ghost text-xl">GadgetHeaven✨</Link>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
    <div role="tablist" className="tabs flex gap-3">
  <Link to='/' role="tab">Home</Link>
  <Link to='/statistics' role="tab">Statistics</Link>
  <Link to='/dashboard' role="tab">Dashboard</Link>
  <Link to='/brand' role="tab">Brand</Link>
</div>
    </ul>
  </div>
  <div className="navbar-end gap-3">
    <Link className="text-3xl bg-slate-50 rounded-full p-2 border" to='cart'><CiShoppingCart /></Link>
    <Link className="text-3xl bg-slate-50 rounded-full p-2 border" to='heart'><CiHeart /></Link>
  </div>
</div>
    );
};

export default Navbar;