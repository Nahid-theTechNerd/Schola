import React from "react";
import SideBarElement from "../Home/SideBarElement";

export default function LessonMenu() {
  const menuItems = [
    { name: "Tutorials", path: "tutorials" },
    { name: "Materials", path: "materials" },
    { name: "Conversations", path: "conversations" },
    { name: "Members", path: "members" },
    { name: "Live", path: "live" },
  ];
  return (
    <div className="">
      {menuItems.map((menuItem) => (
        <SideBarElement
          title={menuItem.name}
          path={menuItem.path}
          key={menuItem.path}
        ></SideBarElement>
      ))}
    </div>
  );
}
