import React from "react";
import SideBar from "./SideBar";
import MainBody from "./MainBody";
import classes from "./Home.module.css";
import Header from "./Header";

export default function Home() {
  return (
    <div className={`${classes.home} h-screen flex flex-col`}>
      <div className="header">
        <Header></Header>
      </div>
      <div className="body flex-1 flex">
        <SideBar></SideBar>
        <MainBody></MainBody>
      </div>
    </div>
  );
}
