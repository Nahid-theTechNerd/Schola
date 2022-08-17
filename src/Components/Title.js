import React from "react";
import { Link } from "react-router-dom";

export default function Title() {
  return (
    <div>
      <Link to="/home" className="flex">
        <h1 className="title">Schola</h1>
      </Link>
    </div>
  );
}
