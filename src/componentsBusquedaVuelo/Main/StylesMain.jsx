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

  @media screen and (max-width: 765px) {
    flex-direction: column;
  }
  p {
    font-size: 1.2rem;
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

export const Title = styled.h1`
padding: 20px 0px 20px 0px;`;
