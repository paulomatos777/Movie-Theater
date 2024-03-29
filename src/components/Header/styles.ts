import styled from "styled-components";

export const headerStyles = {
  header: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    height: "70px",
    padding: "0 20px",
    backgroundColor: "#0d6efd",
    color: "#ffffff",
  },
  title: {
    fontSize: "28px",
    fontWeight: 500,
    margin: 0,
  },
  link: {
    color: "#ffffff",
    textDecoration: "none",
    marginLeft: "20px",
    fontWeight: 500,
    fontSize: "16px",
  },
  linkHover: {
    textDecoration: "underline",
  },
};

export const TextHeader = styled.div`
  display: flex;
  justify-content: center;
  text-align: center;
`;

export const Img = styled.div`
  .img {
    /* background-color: red; */
    width: 30%;
    display: flex;
  }
`;
