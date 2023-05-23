import React, { useState } from "react";
import { AiOutlineClose } from "react-icons/ai";
import { FaSearch } from "react-icons/fa";
import {
  SpanDestination,
  H2,
  ModalDestinationCity,
  Modal,
  ModalContent,
  CloseIcon,
  ModalTitleDestinationCity,
  SearchContainer,
  SearchInput,
  SearchIcon,
  ListCity,
  ItemCity,
} from "./DestinationStyled";

const Destination = () => {
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
          <H2>Ciudad de {selectedCity}</H2>
        ) : (
          <SpanDestination>----</SpanDestination>
        )}
      </div>

      {showModal && (
        <ModalDestinationCity>
          <Modal>
            <ModalContent>
              <ModalTitleDestinationCity>
                ¿A dónde viajas?
              </ModalTitleDestinationCity>
              <CloseIcon onClick={closeModal}>
                <AiOutlineClose size={24} />
              </CloseIcon>
            </ModalContent>

            <SearchContainer>
              <SearchIcon>
                <FaSearch size={18} />
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
        </ModalDestinationCity>
      )}
    </>
  );
};

export default Destination;
