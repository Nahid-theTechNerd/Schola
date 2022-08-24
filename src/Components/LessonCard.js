import React from "react";
import { Link } from "react-router-dom";
import avatar from "../Assets/Images/avatar.png";

export default function LessonCard(props) {
  return (
    <div className="lesson-card rounded mb-3 relative">
      <Link to={props.path} className="text-[#333]">
        <h1 className="lesson-card-title font-semibold text-lg py-1">
          {props.title}
        </h1>
      </Link>
      <p className="lesson_card_description text-sm h-[2.5rem]">
        {props.description}
      </p>
      <span className="category bg-[#30A1FF33] text-url text-[10px] px-2 py-[2px] rounded-full">
        {props.category}
      </span>
      <div className="others_info flex justify-between items-end">
        <div>
          <p className="price text-lg text-[#03A64A]">
            {props.price ? `$ ${props.price}` : ""}
          </p>
          {props.teacher ? (
            <div className="teacher flex gap-2 items-center">
              <div className="image w-5 h-5 rounded-full overflow-hidden bg-url">
                <img src={avatar} alt="" />
              </div>
              <h1 className="font-semibold">{props.teacher.name}</h1>
            </div>
          ) : (
            ""
          )}
          <div className="date text-[10px]">
            {props.date} {props.time}
          </div>
        </div>
        <Link to={props.path}>
          <div className="btn-gradient">{props.button}</div>
        </Link>
      </div>
      <div
        className={`bg-url w-2 h-2 rounded-full absolute top-2 right-2 hidden ${
          props.notification ? "notification" : ""
        }`}
      ></div>
    </div>
  );
}
