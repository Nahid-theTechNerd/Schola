import React from "react";

export default function TutorialCard(props) {
  return (
    <div className="h-[100px] w-[400px] rounded bg-white bg-opacity-40 flex p-2 gap-2 items-center">
      <div className="thumbnail w-[130px] ">
        <img src={props.thumbnail} alt="" />
      </div>
      <div className="info flex-1">
        <h1 className="font-semibold lesson_card_description h-12">
          {props.title}
        </h1>
        <p className="text-sm ">{props.length}</p>
      </div>
    </div>
  );
}
