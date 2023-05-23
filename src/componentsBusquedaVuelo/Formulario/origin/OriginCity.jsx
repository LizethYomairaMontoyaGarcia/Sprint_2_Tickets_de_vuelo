import React, { useState } from "react";
import { AiOutlineClose } from "react-icons/ai";
import { FaSearch } from "react-icons/fa";
import {
  H2l,
  ModalOriginCity,
  Modal,
  ModalContent ,
  CloseIcon,
  ModalTitleCity,
  SearchContainer,
  SearchInput,
  SearchIcon,
  ListCity,
  ItemCity,
} from "./OriginCitystyled"

const Origin = () => {
  const [showModal, setShowModal] = useState(false);
  const [selectedCity, setSelectedCity] = useState("");
  const [searchTerm, setSearchTerm] = useState("");
  const cities = [
    "Medellin",
    "Cali",
    "Cartagena",
    "Pereira",
    "San Luis",
    "Chile",
    "Santa Marta",
    "Estados Unidos",
    "Valledupar",
    "Armenia",
    "Guajira",
  ];

  const openModal = () => {
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  const handleCityClick = (city) => {
    setSelectedCity(city);
    closeModal();
  };

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  return (
    <>
      <div onClick={openModal}>
        {selectedCity ? (
          <H2l>Ciudad de {selectedCity}</H2l>
        ) : (
          <H2l>Selecciona una ciudad</H2l>
        )}
      </div>

      {showModal && (
        <ModalOriginCity>
          <Modal>
            <ModalContent >
              <ModalTitleCity>Punto de partida</ModalTitleCity>
              <CloseIcon onClick={closeModal}>
                <AiOutlineClose size={24} />
              </CloseIcon>
            </ModalContent >

            <SearchContainer>
              <SearchIcon>
                <FaSearch size={20} />
              </SearchIcon>
              <SearchInput
                type="text"
                value={searchTerm}
                onChange={handleSearchChange}
              />
            </SearchContainer>

            <ListCity>
              {cities
                .filter((city) =>
                  city.toLowerCase().includes(searchTerm.toLowerCase())
                )
                .map((city) => (
                  <ItemCity key={city} onClick={() => handleCityClick(city)}>
                    {city}
                  </ItemCity>
                ))}
            </ListCity>
          </Modal>
        </ModalOriginCity>
      )}
    </>
  );
};

export default Origin;
