import { Link, NavLink } from "react-router-dom";
import ThemeChange from "./ThemeChange";
import logo from "../../assets/logo.svg";

export default function Navbar() {
  const navLinks = [
    { id: 0, name: "Home", path: "/" },
    { id: 1, name: "About", path: "/about" },
    { id: 2, name: "Services", path: "/services" },
    { id: 3, name: "Blog", path: "/blog" },
    { id: 4, name: "Contact", path: "/contact" },
  ];
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
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            {navLinks.map((item) => (
              <li key={item.id}>
                <NavLink to={item.path}>{item.name}</NavLink>
              </li>
            ))}
            <li className="mt-2">
              <ThemeChange />
            </li>
          </ul>
        </div>
        <Link to="/" className="text-xl">
          <img src={logo} alt="logo" className="w-[70%]" />
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 space-x-5">
          {navLinks.map((item) => (
            <li key={item.id}>
              <NavLink to={item.path}>{item.name}</NavLink>
            </li>
          ))}
          <li className="mt-1">
            <ThemeChange />
          </li>
        </ul>
      </div>
      <div className="navbar-end">
        <button className="btn btn-outline btn-error hover:text-white">
          Appointment
        </button>
      </div>
    </div>
  );
}
