import React from "react";
import img from "../../Assets/Images/avatar.png";

export default function MermberCard(props) {
  return (
    <div className="h-[100px] min-w-[400px] w-full bg-white bg-opacity-50 px-4 flex items-center rounded mb-3 gap-4">
      <div className="image h-[60px] w-[60px] rounded-full overflow-hidden bg-[#eee]">
        <img src={img} alt="" />
      </div>
      <div className="details">
        <h1 className="text-lg font-semibold">{props.name}</h1>
        <p>{props.role}</p>
      </div>
    </div>
  );
}
