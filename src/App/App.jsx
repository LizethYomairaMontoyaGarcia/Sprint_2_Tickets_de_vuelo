import React from "react";
import GlobalStyles from "./StylesApp";
import Main from "../componentsBusquedaVuelo/Main/Main";
import Footer from "../componentsBusquedaVuelo/Footer/Footer";
import Header from "../componentsBusquedaVuelo/Header/Header";

const App = () => {
  return (
    <>
      <Header />
      <GlobalStyles />
      <Main />
      <Footer />
    </>
  );
};

export default App;
