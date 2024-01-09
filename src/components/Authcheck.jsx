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
