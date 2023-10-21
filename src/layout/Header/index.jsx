import React from "react";
import { NavLink } from "react-router-dom";

const Header = () => {
  const headerBoxShadowStyle = {
    boxShadow:
      "rgba(0, 0, 0, 0.05) 0px 6px 24px 0px, rgba(0, 0, 0, 0.08) 0px 0px 0px 1px",
  };
  return (
    <header className="h-[8vh]" style={headerBoxShadowStyle}>
      <div className="flex justify-between px-8 py-4">
        <h1 className="uppercase text-xl font-bold text-[#333d47]">app Logo</h1>
        <nav className="flex gap-6">
          <NavLink to="/" className="uppercase font-medium">
            Dashboard
          </NavLink>
          <NavLink to="/createAd" className="uppercase font-medium">
            Create Ads
          </NavLink>
        </nav>
      </div>
    </header>
  );
};

export default Header;
