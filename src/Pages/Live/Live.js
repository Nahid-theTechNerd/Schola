import React from "react";
import notAvailable from "../../Assets/Images/not-available.svg";

export default function Live() {
  return (
    <div className="h-full w-full flex flex-col items-center text-large font-semibold">
      <img src={notAvailable} alt="" className="h-1/2 "></img>
      <p>This feature is currently unavailable</p>
    </div>
  );
}
