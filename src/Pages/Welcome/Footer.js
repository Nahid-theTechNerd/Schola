import React from "react";

export default function Footer() {
  return (
    <div className="flex items-center justify-center py-8 ">
      <p className="">Powered by </p>
      <div className="brand h-[20px]">
        <a href="https://boomdevs.com/" target="_blank">
          <img
            src="https://boomdevs.com/wp-content/uploads/2021/10/logo-1.png"
            alt="logo"
            className="h-full pl-1"
          />
        </a>
      </div>
    </div>
  );
}
