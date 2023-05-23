import styled from "styled-components";

export const DIV = styled.div`
  display: flex;
  padding: 0px 0px 0px 80px;
`;

export const StyleHeaderForm = styled.div`
  position: absolute;
  top: 100px;
  padding: 20px 30px;
  background: var(--DarkGry);
  width: 700px;
  border-radius: 15px;
  border: 1px solid #868686;
  background-color: #f3f3f3;
`;

export const ButtonGeneral = styled.button`
  font-size: 1rem;
  width: 150px;
  height: 30px;
  border-radius: 8px;
  margin: 10px;

  :hover{
    background-color: purple;
  }
`;

export const P = styled.p`
  color: var(--Gray);
  font-size: 1.2rem;
`;

export const H1 = styled.h1`
  width: 100%;
  font-size: 3rem;
  padding: 10px 0;
  font-weight: 900;
  line-height: 3.7rem;
`;
