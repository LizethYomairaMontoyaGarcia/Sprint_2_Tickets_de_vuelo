import styled from "@emotion/styled";

export const ContainerPassenger = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

export const Button = styled.button`
  padding: 10px;
  margin: 5px;
  border: none;
  background: transparent;
  cursor: pointer;
`;

export const Modal = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: rgba(0, 0, 0, 0.5);
`;

export const ModalContent = styled.div`
  background-color: white;
  width: 300px;
  padding: 20px;
  border-radius: 4px 4px 18px 18px;
`;

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 10px;
`;

export const Div = styled.div`
  border: 1px solid black;
  border-radius: 5px;
  padding: 5px;
  margin: 5px;
  width: 100%;
`;

export const DivPersonAge = styled.div`
  display: flex;
  align-items: center;
`;

export const Title = styled.h3`
  margin-bottom: 5px;
  padding: 10px;
`;

export const PassengerButton = styled.button`
  padding: 5px;
  margin: 2px;
  border: none;
  color: var(--purple);
  font-size: 30px;
  background: transparent;
`;

export const ModalButton = styled.button`
  margin-top: 10px;
`;
