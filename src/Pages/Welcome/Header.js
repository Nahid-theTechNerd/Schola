import React from "react";
import Title from "../../Components/Title";
import classes from "./Welcome.module.css";

export default function Header() {
  return (
    <section className={`${classes.header} flex justify-between items-center`}>
      <Title></Title>
      <a href="http://">
        <button className="btn-gradient">Get Started</button>
      </a>
    </section>
  );
}
