import React from "react";
import TutorialCard from "../../Components/TutorialCard";

export default function Tutorials() {
  const tutorials = [
    {
      title: "Simple Input Output",
      id: "1001",
      length: "11:20",
      thumbnail:
        "https://img.freepik.com/free-vector/man-front-camera-recording-video-share-it-internet-illustration_335657-276.jpg",
    },
    {
      title: "Conditional Statements",
      id: "1002",
      length: "11:20",
      thumbnail:
        "https://img.freepik.com/free-vector/man-front-camera-recording-video-share-it-internet-illustration_335657-276.jpg",
    },
    {
      title: "Solidity Loops",
      id: "1003",
      length: "11:20",
      thumbnail:
        "https://img.freepik.com/free-vector/man-front-camera-recording-video-share-it-internet-illustration_335657-276.jpg",
    },
  ];
  return (
    <div className="flex flex-col gap-1">
      {tutorials.map((tutotial) => (
        <TutorialCard
          title={tutotial.title}
          id={tutotial.id}
          length={tutotial.length}
          thumbnail={tutotial.thumbnail}
        ></TutorialCard>
      ))}
    </div>
  );
}
