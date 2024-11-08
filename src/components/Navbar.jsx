import { Link, NavLink, useLocation } from "react-router-dom";
import { CiShoppingCart, CiHeart } from "react-icons/ci";

const Navbar = () => {
  const location = useLocation();

  const navbarStyle = {
    backgroundColor: location.pathname === "/" ? "rgb(149,56,226)" : ""
  };
    return (
<div style={navbarStyle} className="navbar bg-base-100">
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
       <NavLink to='/' className={({ isActive }) => (isActive ? "text-purple-500 bg-orange-300" : "")}>Home</NavLink>
   <NavLink to='/dashboard' className={({ isActive }) => (isActive ? "text-purple-500 bg-orange-300" : "")}>Dashboard</NavLink>
  <NavLink to='/brand' className={({ isActive }) => (isActive ? "text-purple-500 bg-orange-300" : "")}>Brand</NavLink>
      </ul>
    </div>
    <Link to='/' className="btn btn-ghost text-xl">GadgetHeaven✨</Link>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
    <div role="tablist" className="tabs flex gap-3">
    <NavLink to='/' className={({ isActive }) => (isActive ? "text-purple-800 font-semibold bg-orange-300" : "")}>Home</NavLink>
  <NavLink to='/statistics' className={({ isActive }) => (isActive ? "text-purple- bg-orange-300 font-semibold" : "")}>Statistics</NavLink>
  <NavLink to='/dashboard' className={({ isActive }) => (isActive ? "text-purple-800 bg-orange-300 font-semibold" : "")}>Dashboard</NavLink>
  <NavLink to='/brand' className={({ isActive }) => (isActive ? "text-purple-800 bg-orange-300 font-semibold" : "")}>Brand</NavLink>
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