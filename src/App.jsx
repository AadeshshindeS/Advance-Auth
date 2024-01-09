import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Authcheck from "./components/Authcheck";

const App = () => {
  return (
    <BrowserRouter>
      <Authcheck>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </Authcheck>
    </BrowserRouter>
  );
};

export default App;
