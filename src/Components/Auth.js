import React from "react";
import { createContext, useState } from "react";

export default function Auth() {

  const [user,setUser] = useState({
    name: null,
    role: null,
  });

  return <div>Auth</div>;
}
