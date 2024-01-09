*App.jsx*

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


*Authcheck.jsx*

import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Authcheck = ({ children }) => {
  const [flag, setflag] = useState(true);
  const [mount, setmount] = useState(true);

  const navigate = useNavigate();
  useEffect(() => {
    if (!flag) {
      setmount(false);
      if (window.location.pathname === "/register") {
        navigate("/register");
      } else {
        navigate("/login");
      }
    }

    if (flag) {
      setmount(false);
      navigate("/");
    }
  }, []);

  if (mount) {
    return <h1 className="text-8xl">Loading</h1>;
  }[]

  return <div>{flag ? children : null}</div>;
};

export default Authcheck;
