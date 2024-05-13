import React from "react";
import "../../styles/Main.scss";
import "../../styles/Header.scss";

const Header: React.FC = () => {
  return (
    <header className="header cfixed">
      <h1 className="logo">
        <a href="#none">PyeongChang 2018</a>
        <nav>
          <ul className="gnb">
            <li>
              <a href="#none">HOME</a>
            </li>
            <li>
              <a href="#none">NEWS</a>
            </li>
            <li>
              <a href="#none">PLAYER</a>
            </li>
            <li>
              <a href="#none">EVENT</a>
            </li>
            <li>
              <a href="#none">CONACT US</a>
            </li>
          </ul>
        </nav>
        <span className="menu-toggle-btn">
          <span></span>
          <span></span>
          <span></span>
        </span>
      </h1>
    </header>
  );
};

export default Header;
