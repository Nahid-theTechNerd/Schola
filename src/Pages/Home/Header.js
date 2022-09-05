import React from "react";
import Title from "./../../Components/Title";
import classes from "./Home.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBell,
  faMagnifyingGlass,
  faPlus,
} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import avatar from "../../Assets/Images/avatar.png";
import Dropdown from "./Dropdown";
import { useState, useContext } from "react";
import AuthContext from "./../../Components/Auth";

export default function Header() {
  const [visible, setVisible] = useState(false);

  const profileOnclick = () => {
    setVisible(!visible);
  };

  const {user} = useContext(AuthContext);

  return (
    <div
      className={`px-10 py-5 flex justify-between items-center ${classes.header}`}
    >
      <Title></Title>
      <div className="account flex gap-4 items-center">
        <div className="search bg-white rounded bg-opacity-50">
          <input
            type="text"
            className="h-7 rounded-l outline-none indent-3 text-sm"
          />
          <button>
            <FontAwesomeIcon
              icon={faMagnifyingGlass}
              className="px-2 rounded-r text-url"
            />
          </button>
        </div>
        <Link to="/add">
          <button className="add_class h-7 w-7 rounded flex justify-center items-center bg-white text-url bg-opacity-50">
            <FontAwesomeIcon icon={faPlus} />
          </button>
        </Link>
        <button className="notification h-7 w-7 rounded flex justify-center items-center bg-white text-url bg-opacity-50">
          <FontAwesomeIcon icon={faBell} />
        </button>
        <div className="profile h-[30px] w-[30px] rounded-full overflow-hidden bg-[#eee]">
          <button onClick={profileOnclick}>
            <img src={avatar} alt="" />
          </button>
          <Dropdown visible={visible} user={user}></Dropdown>
        </div>
      </div>
    </div>
  );
}
