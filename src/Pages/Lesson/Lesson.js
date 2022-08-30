import React from "react";
import LessonHeader from "./LessonHeader";
import LessonMenu from "./LessonMenu";
import { Routes, Route } from "react-router-dom";
import Tutorials from "../Tutorials/Tutorials";
import Materials from "../Materials/Materials";
import Members from "../Members/Members";

export default function Lesson() {
  return (
    <div className="flex h-full w-full ">
      <div className="lesson-container flex-1 flex flex-col">
        <LessonHeader></LessonHeader>
        <div className="lesson-body mx-6 flex-1">
          <Routes>
            <Route exact path="tutorials" element={<Tutorials />} />
            <Route path="materials" element={<Materials />} />
            <Route path="members" element={<Members />} />
          </Routes>
        </div>
      </div>
      <div className="lesson-nav w-[200px] bg-url bg-opacity-10">
        <LessonMenu></LessonMenu>
      </div>
    </div>
  );
}
