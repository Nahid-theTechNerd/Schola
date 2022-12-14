import React from "react";
import { Link } from "react-router-dom";
import avatar from "../../Assets/Images/avatar.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRightFromBracket } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import AuthContext from "../../Components/Auth";

export default function Dropdown(props) {
  const user = {
    name: props.user ? props.user.name : "Hello Mr.",
    role: props.user ? props.user.role : "Student",
  };

  const { setToken, setUser } = useContext(AuthContext);

  const navigate = useNavigate();
  return (
    <div
      className={`absolute top-14 right-8 bg-white p-4 rounded z-50 ${
        props.visible === true ? "visible" : "hidden"
      }`}
    >
      <div className="info flex items-center gap-4">
        <div className="image h-8 w-8 rounded-full overflow-hidden bg-[#eee]">
          <img src={avatar} alt="" />
        </div>
        <div className="info">
          <p className=" font-semibold">{user.name ? user.name : ""}</p>
          <p className="text-sm">{user.role ? user.role : ""}</p>
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
        onClick={() => {
          localStorage.removeItem("token");
          setToken(null);
          setUser(null);
          navigate("/login");
        }}
      >
        <FontAwesomeIcon icon={faArrowRightFromBracket} />
        <span> </span>
        Logout
      </button>
    </div>
  );
}
