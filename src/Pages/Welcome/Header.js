import React from "react";
import Title from "../../Components/Title";
import classes from "./Welcome.module.css";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <section className={`${classes.header} flex justify-between`}>
      <Title></Title>
      <Link to="/signup">
        <button className="btn-gradient">Get Started</button>
      </Link>
    </section>
  );
}
