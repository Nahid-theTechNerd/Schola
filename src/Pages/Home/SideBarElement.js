import React from "react";
import { NavLink } from "react-router-dom";

export default function SideBarElement(props) {
  return (
    <NavLink
      to={props.path}
      className={({ isActive }) => (isActive ? "active" : "inactive")}
    >
      <div className="w-full h-14 flex items-center gap-3 pl-3 font-medium nav-link">
        {props.icon ? (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 512 512"
            className="w-5 "
          >
            <path d={props.icon} />: ''
          </svg>
        ) : (
          ""
        )}
        <div className="element_name">{props.title}</div>
      </div>
    </NavLink>
  );
}
