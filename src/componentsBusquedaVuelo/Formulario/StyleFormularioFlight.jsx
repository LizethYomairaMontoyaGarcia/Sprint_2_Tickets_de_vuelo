import styled from "styled-components";

export const FormularioFlight = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-column-gap: 20px;
  grid-row-gap: 1em;
`;

export const Container = styled.div`
  border: 2px solid;
  height: 70px;
  border-radius: 8px;
  text-align: center;

  h1 {
    width: 100%;
    font-size: 2.3rem;
  }
`;
export const ContainerTwo = styled.div`
  border: 2px solid;
  border-radius: 5px;
  padding: 0;
  span {
    bottom: 20px;
    margin-left: 40px;
  }
  p {
    
    color: #000;
    margin-left: 40px;
  }
`;

export const ButtonFlight = styled.button`
  width: 100%;
  padding: 10px 20px;
  background: purple;
  border: none;
  border-radius: 10px;
  color: White;
  margin: 10px 0 0 0;

  img {
    width: 28px;
    height: 28px;
  }
`;

export const Calendar = styled.img`
  margin: 5px;
  width: 28px;
  height: 28px;
`;

export const SpanSpan = styled.span`
   display: flex;
  font-size: 30px;
  color: #000000;
  margin-inline-start: 200px;
`;
