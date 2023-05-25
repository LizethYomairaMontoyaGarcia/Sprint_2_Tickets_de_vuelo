import styled from "styled-components";

export const DIV = styled.div`
  display: flex;
  padding: 0px 0px 0px 80px;
`;

export const StyleHeaderForm = styled.div`
  position: absolute;
  top: 100px;
  padding: 20px 30px;
  background: DarkGry;
  width: 700px;
  border-radius: 15px;
  border: 1px solid #868686;
  background-color: #f3f3f3;
  @media screen and (max-width: 765px) {
    top: 250px;
    padding: 0px 0px;
    background: DarkGry;
    width: 320px;
  }
`;

export const ButtonGeneral = styled.button`
  border: none;
  padding: 10px 10px;
  font-size: 1rem;
  :hover {
    background-color: #9e1071;
    cursor: pointer;
    color: white;
    border-radius: 7px;
  }
  @media screen and (max-width: 765px) {
    font-size: 0.83rem;
  }
`;

export const StyledButtonForm = styled.div`
  display: flex;
  width: 45%;
  border-radius: 5px;
  border: 1px solid;
  border-color: Gray;
  padding: 10px 20px;
  margin-bottom: 20px;
  margin-top: 20px;
  @media screen and (max-width: 765px) {
    width: 35%;
    padding: 5px 10px;
    margin-bottom: 20px;
    margin-top: 20px;
  }
`;

export const P = styled.p`
  color: Gray;
  font-size: 1.2rem;
  @media screen and (max-width: 765px) {
    font-size: 1rem;
  }
`;

export const H1 = styled.h1`
  width: 100%;
  font-size: 3rem;
  padding: 10px 0;
  font-weight: 900;
  line-height: 3.7rem;
  @media screen and (max-width: 765px) {
    width: 100%;
    font-size: 1.8rem;
  }
`;
