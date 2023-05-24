import React from "react";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import App from "../App/App";
import FlightSelector from "../pages/FlightSelector2";
import SeatSelector from "../pages/SeatSelector3";
import NotFoundPage from "../pages/NotFoundPage";

const AppRoutes = () => {
  return (
<BrowserRouter>
      <Routes>
          <Route path="/" element={<App/>} />
          <Route path="flightSelector" element={<FlightSelector/>} />
          <Route path="seatSelector" element={<SeatSelector/>} />
          <Route path="/" component={<Navigate to="/FlightSearch" />} />
        <Route path="*" element={<NotFoundPage/>} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRoutes;
