import styled from "styled-components";

export const DivPadre = styled.div`
  display: flex;
  padding-left: 50px;
`;

export const DivInfoFlight = styled.div`
  padding-left: 90px;
`;
export const InfoFlight = styled.div`
  padding: 20px;
  background-color: #ebebeb;
  margin-top: 8px;
  margin-bottom: 15px;
  p {
    margin-top: 8px;
    margin-bottom: 8px;
  }
  h3 {
    margin-top: 20px;
    margin-bottom: 10px;
  }
  h2 {
    margin-top: 15px;
    margin-bottom: 15px;
  }
`;

export const InfoPrice = styled.div`
  padding: 20px;
  background-color: #ebebeb;
  margin-top: 8px;
  margin-bottom: 15px;
  p {
    margin-top: 15px;
    margin-bottom: 15px;
  }
`;

export const Info = styled.div`
  padding: 20px;
  background-color: #ebebeb;
  margin-top: 8px;
  margin-bottom: 15px;
  p {
    margin-top: 15px;
    margin-bottom: 15px;
  }
`;

export const Promotion = styled.p`
  color: #039723;
  margin-top: 15px;
  margin-bottom: 15px;
`;

export const Total = styled.div`
  padding: 20px;
  background-color: #ebebeb;
  margin-top: 8px;
  margin-bottom: 15px;
`;

export const Title = styled.div`
  padding-left: 50px;
  margin-top: 40px;
  margin-bottom: 15px;
`;

export const ButtonPaypal = styled.button`
  border-radius: 20px;
  border: 1px solid #9e1071;
  background-color: transparent;
  padding: 18px 18px;
  margin-top: 2rem;
  margin-left: auto;
  font-size: 16px;
  font-weight: bold;
  width: 310px;
  color: #9e1071;
  display: flex;
  justify-content: center;
  align-items: center;

  &:hover {
    background-color: #9e1071;
    cursor: pointer;
    color: white;
  }
`;

export const ImgPaypal = styled.img`
  width: 30px;
  margin-right: 20px;
`;
