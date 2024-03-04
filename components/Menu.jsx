import React from "react";
import "../style/Menu.css"; 

const Menu = () => {
  return (
    <nav className="menu">
      <ul>
        <li>
          <a href="/">Home</a>
        </li>
        <li>
          <a href="/about">Sobre</a>
        </li>
        <li>
          <a href="/contact">Contato</a>
        </li>
      </ul>
    </nav>
  );
};

export default Menu;
