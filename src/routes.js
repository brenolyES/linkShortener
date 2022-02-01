import { BrowserRouter, Routes, Route } from "react-router-dom";
import React from 'react';
import Home from "./pages/Home";
import Links from "./pages/Links";

const RoutesApp = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/links' element={<Links/>} />
      </Routes>
    </BrowserRouter>
  );
};

export default RoutesApp;
