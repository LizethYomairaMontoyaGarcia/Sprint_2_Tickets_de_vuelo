import React from "react";
import GlobalStyles from "./StylesApp";
import Main from "../Main/Main";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";

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
