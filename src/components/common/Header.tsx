import React from "react";
import "../../styles/Main.scss";
import "../../styles/Header.scss";
import { GnbType } from "../../model/type";

// Gnb list data
let gnbData: GnbType = {
  list: [
    { name: "HOME" },
    { name: "NEWS" },
    { name: "PLAYER" },
    { name: "EVENT" },
    { name: "CONTACT US" },
  ],
};

const Header: React.FC = () => {
  return (
    <header className="header cfixed">
      <h1 className="logo">
        <a href="#none">PyeongChang 2018</a>
      </h1>
      <nav>
        <ul className="gnb">
          {gnbData.list.map((data, index) => (
            <li key={index}>
              <a href="#none">{data.name}</a>
            </li>
          ))}
        </ul>
      </nav>
      <span className="menu-toggle-btn">
        <span></span>
        <span></span>
        <span></span>
      </span>
    </header>
  );
};

export default Header;
