import React from "react";
import Nav from "../Nav";
import { headerStyles, TextHeader } from "./styles";

interface HeaderProps {
  title: string;
}

const Header: React.FC<HeaderProps> = ({ title }) => {
  return (
    <header style={headerStyles.header}>
      <TextHeader>
        <h1 style={headerStyles.title}>{title}</h1>
      </TextHeader>
      <Nav></Nav>
    </header>
  );
};

export default Header;
