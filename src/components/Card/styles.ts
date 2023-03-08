import styled from "styled-components";

export const CardContainer = styled.div`
  background-color: #ffffff;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  border-radius: 4px;
  overflow: hidden;
  margin-bottom: 16px;
  width: 100%;
`;

export const CardHeader = styled.div`
  padding: 16px;
  border-bottom: 1px solid #e5e5e5;
`;

export const CardTitle = styled.h2`
  margin: 0;
  font-size: 20px;
  font-weight: 500;
  color: #222222;
`;

export const CardBody = styled.div`
  padding: 16px;
`;

export const CardFooter = styled.div`
  padding: 16px;
  border-top: 1px solid #e5e5e5;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const CardButton = styled.button`
  background-color: #007bff;
  color: #ffffff;
  border: none;
  border-radius: 4px;
  padding: 8px 16px;
  font-size: 16px;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s ease-in-out;

  &:hover {
    background-color: #0062cc;
  }
`;
