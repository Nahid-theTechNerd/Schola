import React from "react";
import Footer from "./Footer";
import Header from "./Header";
import HeroSection from "./HeroSection";
import classes from "./Welcome.module.css";

export default function Welcome() {
  return (
    <div className={classes.welcome}>
      <Header></Header>
      <HeroSection></HeroSection>
      <Footer></Footer>
    </div>
  );
}
