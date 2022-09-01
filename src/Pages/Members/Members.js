import React from "react";
import MermberCard from "./MermberCard";

export default function Members() {
  const classID = "XaLm9o";
  const inviteURL = `https://localhost:3000/classroom/join/${classID}`;
  const members = [
    {
      id: "01",
      name: "Nahid Hasan",
      role: "student",
      img: "https://lh3.googleusercontent.com/ogw/AOh-ky3zGg29iIz6jfO6qyq_PuX4Jkf1uUBxLk66MM-B=s1080-c-mo",
    },
    {
      id: "01",
      name: "Nahid Hasan",
      role: "student",
      img: "https://lh3.googleusercontent.com/ogw/AOh-ky3zGg29iIz6jfO6qyq_PuX4Jkf1uUBxLk66MM-B=s1080-c-mo",
    },
    {
      id: "01",
      name: "Nahid Hasan",
      role: "student",
      img: "https://lh3.googleusercontent.com/ogw/AOh-ky3zGg29iIz6jfO6qyq_PuX4Jkf1uUBxLk66MM-B=s1080-c-mo",
    },
    {
      id: "01",
      name: "Nahid Hasan",
      role: "student",
      img: "https://lh3.googleusercontent.com/ogw/AOh-ky3zGg29iIz6jfO6qyq_PuX4Jkf1uUBxLk66MM-B=s1080-c-mo",
    },
    {
      id: "01",
      name: "Nahid Hasan",
      role: "student",
      img: "https://lh3.googleusercontent.com/ogw/AOh-ky3zGg29iIz6jfO6qyq_PuX4Jkf1uUBxLk66MM-B=s1080-c-mo",
    },
    {
      id: "01",
      name: "Nahid Hasan",
      role: "student",
      img: "https://lh3.googleusercontent.com/ogw/AOh-ky3zGg29iIz6jfO6qyq_PuX4Jkf1uUBxLk66MM-B=s1080-c-mo",
    },
    {
      id: "01",
      name: "Nahid Hasan",
      role: "student",
      img: "https://lh3.googleusercontent.com/ogw/AOh-ky3zGg29iIz6jfO6qyq_PuX4Jkf1uUBxLk66MM-B=s1080-c-mo",
    },
  ];
  return (
    <div className="main flex w-full h-full gap-6">
      <div className="h-[80%] w-[55%] overflow-scroll">
        {members.map((member) => (
          <MermberCard
            key={member.id}
            name={member.name}
            role={member.role}
            img={member.img}
          ></MermberCard>
        ))}
      </div>
      <div className="invite">
        <h1 className="text-lg font-semibold">Invite</h1>
        
      </div>
    </div>
  );
}
