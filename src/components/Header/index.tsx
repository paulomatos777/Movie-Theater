import React from "react";
import Nav from "../Nav";
import { headerStyles } from "./styles";

interface HeaderProps {
  title: string;
}

const Header: React.FC<HeaderProps> = ({ title }) => {
  return (
    <header style={headerStyles.header}>
      <h1 style={headerStyles.title}>{title}</h1>
      <Nav></Nav>
      {/* <a href="#" style={headerStyles.link}>
        Link
      </a> */}
    </header>
  );
};

export default Header;
