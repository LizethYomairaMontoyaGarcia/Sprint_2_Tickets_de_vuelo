import styled from "styled-components";

export const StyleHeaderForm = styled.div`
  position: absolute;
  top: 100px;
  padding: 20px 30px;
  background: var(--DarkGry);
  width: 920px;
  border-radius: 15px;
  border: 1px solid #ddd;

  h1 {
    width: 100%;
    font-size: 4.5rem;
    padding: 10px 0;
    font-weight: 900;
    line-height: 3.7rem;
  }
  p {
    color: var(--Gray);
    font-size: 1.8rem;
  }
  button{
    font-size: 2rem;
    width: 250px;
    border-radius: 10px;
  }
`;
