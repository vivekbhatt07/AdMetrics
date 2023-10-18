import React from "react";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <header className="h-[8vh] outline">
      <div className="flex justify-between px-8 py-4">
        <h1 className="uppercase">app Logo</h1>
        <nav className="flex gap-6">
          <NavLink to="/" className="uppercase">
            Dashboard
          </NavLink>
          <NavLink to="/createAd" className="uppercase">
            Create Ads
          </NavLink>
        </nav>
      </div>
    </header>
  );
};

export default Header;
