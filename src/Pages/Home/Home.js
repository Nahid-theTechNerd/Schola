import React from "react";
import SideBar from "./SideBar";
import classes from "./Home.module.css";
import Header from "./Header";
import Dashboard from "../Dashboard/Dashboard";
import { Routes, Route } from "react-router-dom";
import ClassRoom from "../ClassRoom/ClassRoom";
import AddStudent from "../Add/AddStudent";

export default function Home() {
  // const role = "student";
  return (
    <div
      className={`${classes.home} h-screen w-full flex flex-col`}
    >
      <div className="header">
        <Header></Header>
      </div>
      <div className="body flex-1 flex">
        <SideBar></SideBar>
        <div className="main__body flex-1 h-full overflow-scroll">
          <Routes>
            <Route index path="/dashboard" element={<Dashboard />}></Route>
            <Route path="/classroom" element={<ClassRoom />}></Route>
            <Route path="/add" element={<AddStudent />}></Route>
          </Routes>
        </div>
      </div>
    </div>
  );
}
