import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import React from 'react';

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRoutes;
