import React from "react";
import { Link } from "react-router-dom";

export default function LessonCard(props) {
  return (
    <div className="lesson-card rounded mb-3">
      <Link to="" className="text-[#333]">
        <h1 className="font-semibold text-lg  ">{props.title}</h1>
      </Link>
      <p className="lesson_card_description text-sm">{props.description}</p>
      <span className="category bg-[#30A1FF33] text-url text-[10px] px-2 py-[2px] rounded-full">
        {props.category}
      </span>
      <div className="others_info flex justify-between items-end">
        <div>
          <p className="price text-lg text-[#03A64A]">$ {props.price}</p>
          <div className="date text-[10px]">
            {props.date} {props.time}
          </div>
          <div className="images"></div>
        </div>
        <div className="btn-gradient">{props.button}</div>
      </div>
    </div>
  );
}
