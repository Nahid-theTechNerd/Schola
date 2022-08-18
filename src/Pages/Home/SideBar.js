import React from "react";
import classes from "./Home.module.css";

export default function SideBar() {
  const element = [
    { title: "Dashboard", icon: "faTableColumns"},
    { title: "Classrooms", icon: "faBuildingColumns"}, 
    { title: "Incoming Lessons", icon: "faTableColumns"},
    { title: "Account", icon: "faTableColumns"},
  ];
  console.log(element);

  return <div className={`w-[240px] ${classes.sidebar}`}>Sidebar</div>;
}
