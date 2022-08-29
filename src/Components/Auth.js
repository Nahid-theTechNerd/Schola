import React from "react";
import { useState, createContext } from "react";
import axios from "axios";

export default function Auth() {
  const [user, setUser] = useState(null);
  axios.get("me").then((response) => {
    console.log(response);
    setUser(response);
  });
  console.log(user);
  return <div></div>;
}
