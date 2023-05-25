import { styled } from "styled-components";

export const PaymentMethods = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  padding: 24px 32px 20px;
  border-radius: 5px;
  font-size: 0.75rem;
  box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.2);
  gap: 5px;
  background-color: #fff;

  p {
    font-size: 1.2rem;
  }
  @media screen and (max-width: 765px) {
    width: 240px;
    flex-direction: column;
    p {
      text-align: center;
      margin-block-start: 1em;
    }
  }
`;

export const ImgPay = styled.figure`
  img {
    padding: 15px 10px;
  }
  @media screen and (max-width: 765px) {
    display: block;
    margin-block-start: 1em;
    margin-block-end: 1em;
    margin-inline-start: 40px;
    margin-inline-end: 40px;
    img {
      flex-direction: column;
      display: flex;
      align-items: center;
      width: 80px;
    }
  }
`;

export const ContainerMain = styled.div`
  padding: 30px 70px 40px 70px;
`;

export const Title = styled.h1`
  padding: 20px 0px 20px 0px;
  @media screen and (max-width: 765px) {
    text-align: center;
  }
`;
