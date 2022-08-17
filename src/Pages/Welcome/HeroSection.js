import React from "react";
// import classes from "./Welcome.module.css";
import cover from "../../Assets/Images/cover.png";

export default function HeroSection() {
  return (
    <section className="my-16 mx-20 flex justify-between items-center gap-4">
      <div className="w-1/2">
        <h1 className="slogan text-[44px] font-bold">
          <span className="title">Schola</span>
          <br /> Learn from Anywhere.
        </h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequatur
          deserunt animi dolores dignissimos reiciendis pariatur.
        </p>
        <a href="http://">
          <button className="btn-gradient my-2">Get Started</button>
        </a>
      </div>
      <div className="cover-photo w-1/2 flex justify-center items-center">
        <img src={cover} alt="" />
      </div>
    </section>
  );
}
