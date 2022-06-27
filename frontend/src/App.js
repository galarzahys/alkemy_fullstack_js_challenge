import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";
import HomePage from "./pages/HomePage";


import "./App.css";
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  return (
    <>
      <BrowserRouter>
        <Header></Header>
        <Routes>
          <Route path="/" element={<HomePage />} />
        </Routes>
        <Footer></Footer>
      </BrowserRouter>
    </>
  );
}

export default App;
