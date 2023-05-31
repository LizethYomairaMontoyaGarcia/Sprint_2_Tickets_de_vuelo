import React, { createContext, useState } from "react";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import App from "../App/App";
import FlightSelector from "../pages/FlightSelector2";
import SeatSelector from "../pages/SeatSelector3";
import NotFoundPage from "../pages/NotFoundPage";
import FormularioPago from "../pages/FormularioPago4";
import ResumenVuelo from "../pages/ResumenVuelo5" ;

export const searchParamsContext = createContext({});

const AppRoutes = () => {
  const [selectedCityOrigin, setSelectedCityOrigin] = useState("");
  const [selectedCityDestination, setSelectedCityDestination] = useState("");
  const [dateCalendarExit,setDateCalendarExit] = useState({});
  const [dateCalendarIcome, setdateCalendarIcome] = useState({});
  const [selectedPassengers, setSelectedPassengers] = useState({
    adults: 0,
    children: 0,
    baby: 0,
  });

  return (
    <BrowserRouter>
      <searchParamsContext.Provider
        value={{
          selectedCityOrigin,
          setSelectedCityOrigin,
          selectedCityDestination,
          setSelectedCityDestination,
          dateCalendarExit,
          setDateCalendarExit,
          dateCalendarIcome, 
          setdateCalendarIcome,
          selectedPassengers,
          setSelectedPassengers
        }}
      >
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="flightSelector" element={<FlightSelector />} />
          <Route path="seatSelector" element={<SeatSelector />} />
          <Route path="formpago" element={<FormularioPago />} />
          <Route path="resume" element={<ResumenVuelo/>} />
          <Route path="/" component={<Navigate to="/FlightSearch" />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </searchParamsContext.Provider>
    </BrowserRouter>
  );
};

export default AppRoutes;
