import React from "react";
import Nav from "../Nav";
import { headerStyles, Img, TextHeader } from "./styles";
import logo from "../../assets/logo-movie.png";

interface HeaderProps {
  title: string;
}

const Header: React.FC<HeaderProps> = ({ title }) => {
  return (
    <header style={headerStyles.header}>
      <Img>
        {" "}
        <img className="img" src={logo} alt="logo-cine" />
      </Img>

      <Nav></Nav>
    </header>
  );
};

export default Header;
