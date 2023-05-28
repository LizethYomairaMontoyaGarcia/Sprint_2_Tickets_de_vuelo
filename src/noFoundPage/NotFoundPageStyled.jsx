import styled from "@emotion/styled";

export const Error404 = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  img {
    width: 550px;
  }

  h1 {
    font-size: 3.5rem;
  }

  @media screen and (max-width: 765px) {
    img {
      width: 350px;
    }
    h1 {
      font-size: 1.5rem;
      justify-content:center;
    }
  }
`;
