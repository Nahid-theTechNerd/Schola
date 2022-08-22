import React from "react";
import { Link } from "react-router-dom";
import avatar from "../../Assets/Images/avatar.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRightFromBracket } from "@fortawesome/free-solid-svg-icons";

export default function Dropdown(props) {
  const user = {
    name: "Nahid Hasan",
    role: "Student",
  };

  return (
    <div
      className={`absolute top-14 right-8 bg-white bg-opacity-50 p-4 rounded ${
        props.visible === true ? "visible" : "hidden"
      }`}
    >
      <div className="info flex items-center gap-4">
        <div className="image h-8 w-8 rounded-full overflow-hidden bg-[#eee]">
          <img src={avatar} alt="" />
        </div>
        <div className="info">
          <p className=" font-semibold">{user.name}</p>
          <p className="text-sm">{user.role}</p>
        </div>
      </div>
      <hr className="text-[#aaa] py-1 mt-2" />
      <Link to="/setings" className="text-[#333]">
        {" "}
        Account Settings
      </Link>
      <hr className="text-[#aaa] py-1 mt-2" />
      <button
        className="btn-gradient  gap-2 w-full"
        onClick={() => console.log("Logout")}
      >
        <FontAwesomeIcon icon={faArrowRightFromBracket} />
        <span> </span>
        Logout
      </button>
    </div>
  );
}
