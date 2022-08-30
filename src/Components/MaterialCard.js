import React from "react";
import document from "../Assets/Images/document.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDownload } from "@fortawesome/free-solid-svg-icons";

export default function MaterialCard(props) {
  return (
    <div className="document flex h-[100px] min-w-[400px] w-[70%] bg-white bg-opacity-50 rounded items-center gap-4 justify-between px-7 py-2">
      <div className="image h-[60px] w-[60px] bg-white rounded overflow-hidden">
        <img className="w-full h-auto" src={document} alt="" />
      </div>
      <div className="info flex-1 flex gap-3 justify-between items-center">
        <div className="details">
          <h1 className="text-xl font-semibold">{props.title}</h1>
          <p>{props.type}</p>
        </div>
        <div className="download">
          <button className="btn-gradient">
            <FontAwesomeIcon
              icon={faDownload}
              className="mr-4"
            />{" "}
            Download
          </button>
        </div>
      </div>
    </div>
  );
}
