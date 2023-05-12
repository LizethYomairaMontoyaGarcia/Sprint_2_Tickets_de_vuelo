import { styled } from "styled-components";

export const PaymentMethods = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  padding: 24px 32px 20px;

  @media screen and (max-width: 765px) {
    flex-direction: column;
  }
`;

export const ImgPay = styled.figure`
  img {
    padding: 15px 10px;
  }
`;

export const ContainerMain = styled.div`
  padding: 30px 70px 40px 70px;
`;

export const Title = styled.h1``;
