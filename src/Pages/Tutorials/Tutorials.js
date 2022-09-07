import React from "react";
import TutorialCard from "../../Components/TutorialCard";

export default function Tutorials() {
  const tutorials = [
    {
      title: "Simple Input Output",
      id: "1001",
      length: "11:20",
      url: "https://storage.googleapis.com/afs-prod/media/urn:publicid:ap.org:e15ad4707b074d958536ae5ddd1cdbae/1920.mp4",
      thumbnail:
        "https://img.freepik.com/free-vector/man-front-camera-recording-video-share-it-internet-illustration_335657-276.jpg",
    },
    {
      title: "Conditional Statements",
      id: "1002",
      length: "11:20",
      url: "https://storage.googleapis.com/afs-prod/media/urn:publicid:ap.org:e15ad4707b074d958536ae5ddd1cdbae/1920.mp4",
      thumbnail:
        "https://img.freepik.com/free-vector/man-front-camera-recording-video-share-it-internet-illustration_335657-276.jpg",
    },
    {
      title: "Solidity Loops",
      id: "1003",
      length: "11:20",
      url: "https://storage.googleapis.com/afs-prod/media/urn:publicid:ap.org:e15ad4707b074d958536ae5ddd1cdbae/1920.mp4",
      thumbnail:
        "https://img.freepik.com/free-vector/man-front-camera-recording-video-share-it-internet-illustration_335657-276.jpg",
    },
    {
      title: "Object Oriented Basics",
      id: "1003",
      length: "11:20",
      url: "https://storage.googleapis.com/afs-prod/media/urn:publicid:ap.org:e15ad4707b074d958536ae5ddd1cdbae/1920.mp4",
      thumbnail:
        "https://img.freepik.com/free-vector/man-front-camera-recording-video-share-it-internet-illustration_335657-276.jpg",
    },
    {
      title: "Beginner Project - A mobile banking system",
      id: "1003",
      length: "11:20",
      url: "https://storage.googleapis.com/afs-prod/media/urn:publicid:ap.org:e15ad4707b074d958536ae5ddd1cdbae/1920.mp4",
      thumbnail:
        "https://img.freepik.com/free-vector/man-front-camera-recording-video-share-it-internet-illustration_335657-276.jpg",
    },
    {
      title:
        "Advance Project - A banking system with loan, mobile-banking, online-banking and visa facilities",
      id: "1003",
      length: "11:20",
      url: "https://storage.googleapis.com/afs-prod/media/urn:publicid:ap.org:e15ad4707b074d958536ae5ddd1cdbae/1920.mp4",
      thumbnail:
        "https://img.freepik.com/free-vector/man-front-camera-recording-video-share-it-internet-illustration_335657-276.jpg",
    },
    {
      title:
        "Advance Project - A banking system with loan, mobile-banking, online-banking and visa facilities",
      id: "1003",
      length: "11:20",
      url: "https://storage.googleapis.com/afs-prod/media/urn:publicid:ap.org:e15ad4707b074d958536ae5ddd1cdbae/1920.mp4",
      thumbnail:
        "https://img.freepik.com/free-vector/man-front-camera-recording-video-share-it-internet-illustration_335657-276.jpg",
    },
    {
      title:
        "Advance Project - A banking system with loan, mobile-banking, online-banking and visa facilities",
      id: "1003",
      length: "11:20",
      url: "https://storage.googleapis.com/afs-prod/media/urn:publicid:ap.org:e15ad4707b074d958536ae5ddd1cdbae/1920.mp4",
      thumbnail:
        "https://img.freepik.com/free-vector/man-front-camera-recording-video-share-it-internet-illustration_335657-276.jpg",
    },
  ];

  const firstTutorial = tutorials[0] ? tutorials[0] : null;
  const play = firstTutorial;
  // TODO: State must be implemented for playing videos.
  return (
    <div className="lesson flex gap-2">
      <div className="flex-1">
        <video
          src={play.url}
          className="w-full aspect-video ]"
          controls
        ></video>
        <h1 className="text-xl font-semibold pt-2">{play.title}</h1>
      </div>
      <div className="flex flex-col gap-1 h-[calc(100vh-115px)] overflow-scroll">
        {tutorials.map((tutotial) => (
          <TutorialCard
            key={tutotial.id}
            title={tutotial.title}
            id={tutotial.id}
            length={tutotial.length}
            thumbnail={tutotial.thumbnail}
            url={tutotial.url}
          ></TutorialCard>
        ))}
      </div>
    </div>
  );
}
