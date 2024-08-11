import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="bg-purple-400 text-white">
      <nav>
        <ul className="flex justify-between items-center gap-5 p-2">
          <h1 className="font-bold text-2xl font-serif">Login Form</h1>
          <div className="links flex justify-between items-center gap-5 p-2">
            <Link className="font-bold text-xl hover:text-2xl transition-all hover:border-b-2 hover:border-black cursor-pointer">
              Home
            </Link>
            <Link className="font-bold text-xl hover:text-2xl transition-all hover:border-b-2 hover:border-black cursor-pointer">
              About
            </Link>
            <Link
              to={"/login"}
              className="font-bold text-xl hover:text-2xl transition-all hover:border-b-2 hover:border-black cursor-pointer"
            >
              Logout
            </Link>
          </div>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
