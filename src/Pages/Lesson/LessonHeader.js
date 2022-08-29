import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";

export default function LessonHeader() {
  const prev = useNavigate();
  const lesson = {
    title: "Solidity Programming Language",
  };

  return (
    <div className="mx-5 mt-5">
      <h1 className="text-[20px] font-semibold mb-4 flex items-center gap-2">
        <button
          className="ml-1 rounded-full bg-url bg-opacity-20 text-[16px] h-8 w-8 "
          onClick={() => prev(-1)}
        >
          <FontAwesomeIcon icon={faArrowLeft} />
        </button>

        {lesson.title}
      </h1>
    </div>
  );
}
