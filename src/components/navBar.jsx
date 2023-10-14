import React from "react";
import logo from "/src/assets/solfi-logo.png";
import { Link, NavLink } from "react-router-dom";
const NavBar = () => {
  return (
    <main>
      <nav className="flex items-center lg:gap-x-80  gap-x-24  font-nunito  mt-2 p-2">
        <h1 className=" text-green-500 lg:text-2xl text-xl font-oswald">
          <Link to="/" className="flex items-center gap-2">
            <img className="w-[50px] h-[40px]" src={logo} alt="logo" />
            SolFinance
          </Link>
        </h1>

        <ul className="flex justify-center items-center gap-8 text-green-500 lg:text-lg text-md ">
          <li>
            <NavLink to="/">Explore</NavLink>
          </li>
          <li>
            <NavLink to="/swapTerminal">Swapping</NavLink>
          </li>
        </ul>
      </nav>
    </main>
  );
};

export default NavBar;
