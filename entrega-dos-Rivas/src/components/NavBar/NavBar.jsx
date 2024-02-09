import React from "react";
import CartWidget from "../CartWidget/CartWidget";
import { NavLink } from "react-router-dom";

const NavBar = () => {
  return (
    <>
      <nav className="flex items-center justify-between flex-wrap bg-gradient-to-b from-yellow-300 p-6">
        <NavLink to={"/"}>
          <img
            src="../public/LogoSexDiscos/sexDiscoLogo.png"
            alt="logo"
            className="w-72"
          />
        </NavLink>

        <div className="w-full hidden lg:flex lg:items-center lg:w-auto">
          <div className="text-base items-center lg:flex-grow">
            <NavLink
              to={"categoria/vinilos"}
              className="block mt-4 lg:inline-block lg:mt-0 text-zinc-700  active:scale-110 active:font-black m-4"
            >
              Vinilos
            </NavLink>

            <NavLink
              to={"categoria/cds"}
              className="block mt-4 lg:inline-block lg:mt-0 text-zinc-700  active:scale-110 active:font-black m-4"
            >
              CDs
            </NavLink>

            <NavLink
              to={"categoria/cassettes"}
              className="block mt-4 lg:inline-block lg:mt-0 text-zinc-700  active:scale-110 active:font-black m-4"
            >
              Cassettes
            </NavLink>

            <NavLink
              to={"categoria/camisetas"}
              className="block mt-4 lg:inline-block lg:mt-0 text-zinc-700  active:scale-110 active:font-black m-4"
            >
              Camisetas
            </NavLink>

            <CartWidget />
          </div>
        </div>
      </nav>
    </>
  );
};

export default NavBar;
