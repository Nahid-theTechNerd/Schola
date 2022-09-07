import React from "react";
import LessonCard from "../../Components/LessonCard";
import axios from "axios";
import { useEffect } from "react";

export default function AddTeacher() {
  const [request, setRequest] = React.useState([]);

  useEffect(() => {
    axios
      .get("students-Class-Request")
      .then((res) => {
        const allRequest = res.data?.studentClassRequest;
        console.log(allRequest);
        const pendingRequest = allRequest.filter(
          (request) => request?.status === "pending"
        );
        setRequest(pendingRequest);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="mx-5 mt-5">
      <h1 className="text-[20px] font-semibold mb-4 h-full">Take a lesson</h1>
      <div className=" flex  gap-8">
        <div className="lessons w-[65%] h-[calc(100vh-120px)] overflow-scroll">
          {request.map((req) => (
            <LessonCard
              key={req?._id}
              title={req?.title}
              description={req?.description}
              category={req?.category}
              price={req?.price}
              date={req?.date}
              // time={req.time}
              path=""
              button="Take Lesson"
            ></LessonCard>
          ))}
        </div>
        <div className="options">
          <p className="font-semibold">Filter</p>
        </div>
      </div>
    </div>
  );
}
