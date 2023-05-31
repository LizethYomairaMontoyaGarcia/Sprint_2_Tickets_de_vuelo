import styled from "styled-components";

export const H2l = styled.h2`
  display: flex;
  align-items: center;
  margin-block-end: 0.5em;
  margin-inline-start: 30px;
  @media screen and (max-width: 765px) {
    font-size: 1rem;
    margin-inline-start: 0px;
  }
`;

export const ModalOriginCity = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Modal = styled.div`
  background-color: #fff;
  width: 400px;
  padding: 20px;
  border-radius: 15px;
  @media screen and (max-width: 765px) {
    width: 350px;
  }
`;

export const ModalContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 10px;
`;

export const CloseIcon = styled.span`
  background: none;
  border: none;
  cursor: pointer;
`;

export const ModalTitleCity = styled.h2`
  margin: 0;
  font-size: 20px;
`;

export const SearchContainer = styled.div`
  position: relative;
  margin-bottom: 10px;
`;

export const SearchInput = styled.input`
  padding: 8px;
  border-radius: 4px;
  border: 1px solid #ccc;
  width: 100%;
  padding-left: 30px; /* Aumentamos el padding para dejar espacio para el icono */
`;

export const SearchIcon = styled.span`
  position: absolute;
  top: 50%;
  left: 10px;
  transform: translateY(-50%);
`;

export const ListCity = styled.ul`
  display: flex;
  list-style: none;
  flex-direction: column; 
`;

export const ItemCity = styled.li`
  margin-bottom: 5px;
  border: 1px;
`;
