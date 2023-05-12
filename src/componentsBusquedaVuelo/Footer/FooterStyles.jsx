import { styled } from "styled-components";

export const ContainerFooter = styled.div`
  padding: 30px 70px 40px 70px;
  
`;

export const Position = styled.div`
  flex-direction: row;
  display:flex;
   padding: 30px 70px 40px 70px;
`;

export const ContainerImg = styled.div`
  width: 160px;
  background-color: #fff;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  gap: 5px;
  padding: 2.5em 1em 1em;
  border-radius: 5px;
  font-size: 0.75rem;
  box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.2);
  h3 {
    font-size: 0.87rem;
  }
  p {
    color: #666666;
  }

  figure {
    :hover {
      color: #8431b4;
    }
    img {
      width: 80px;
    }
  }
`;
