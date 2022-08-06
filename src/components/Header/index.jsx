import React from "react";
import { Link } from "react-router-dom";
import { Container } from "./styles";

function Header() {
  return (
    <Container>
      <div className="flex-1">
        <Link className="btn btn-ghost normal-case text-xl" to="/">React Wordpress APP</Link>
      </div>
      <div className="flex-none">
        <ul className="menu menu-horizontal p-0">
          <li>
            <Link to="/blogs">Blogs</Link>
          </li>
        </ul>
      </div>
    </Container>
  );
}

export default Header;
