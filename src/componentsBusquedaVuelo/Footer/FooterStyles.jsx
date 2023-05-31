import { styled } from "styled-components";

export const ContainerFooter = styled.div`
  padding: 30px 80px 40px 80px;
`;

export const H1 = styled.h1`
  @media screen and (max-width: 765px) {
    text-align: center;
  }
`;

export const Position = styled.div`
  flex-direction: row;
  display: flex;
  gap: 70px;
  padding: 20px 10px 30px 0px;
  @media screen and (max-width: 765px) {
    display: flex;
    flex-direction: column;
  }
`;

export const ContainerImg = styled.div`
  width: 200px;
  height: 280px;
  background-color: #fff;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  gap: 5px;
  padding: 2em 1.5em 1.5em;
  border-radius: 10px;
  font-size: 0.9rem;
  box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.2);
  h3 {
    font-size: 1.2rem;
    margin: 10px 0px 10px 0px;
  }
  p {
    color: #929191;
    margin: 10px 0px 10px 0px;
    font-size: 0.95rem;
  }

  figure {
    img {
      width: 90px;
    }
  }
  @media screen and (max-width: 765px) {
    h3 {
      font-size: 1.35rem;
    }
    p {
      font-size: 1rem;
    }
  }
`;
