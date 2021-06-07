import React from "react";
import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <>
      <h3>Logo</h3>
      <ul>
        <Link to="/about">
          <li>About</li>
        </Link>
        <Link to="/shop">
          <li>Shop</li>
        </Link>
      </ul>
    </>
  );
};

export default Nav;
