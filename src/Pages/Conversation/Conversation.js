import React from "react";

export default function Conversation() {
  const conversations = [
    { time: "10:00AM", message: "Hello, world!", senderID: "246213", id: "1" },
    { time: "10:00AM", message: "Hello, world!", senderID: "246213", id: "1" },
    { time: "10:00AM", message: "Hello, world!", senderID: "246213", id: "1" },
    { time: "10:00AM", message: "Hello, world!", senderID: "246213", id: "1" },
    { time: "10:00AM", message: "Hello, world!", senderID: "246213", id: "1" },
    { time: "10:00AM", message: "Hello, world!", senderID: "246213", id: "1" },
    { time: "10:00AM", message: "Hello, world!", senderID: "246213", id: "1" },
    { time: "10:00AM", message: "Hello, world!", senderID: "246213", id: "1" },
    { time: "10:00AM", message: "Hello, world!", senderID: "246213", id: "1" },
    { time: "10:00AM", message: "Hello, world!", senderID: "246213", id: "1" },
    { time: "10:00AM", message: "Hello, world!", senderID: "246213", id: "1" },
    { time: "10:00AM", message: "Hello, world!", senderID: "246213", id: "1" },
    { time: "10:00AM", message: "Hello, world!", senderID: "246213", id: "1" },
    { time: "10:00AM", message: "Hello, world!", senderID: "246213", id: "1" },
    { time: "10:00AM", message: "Hello, world!", senderID: "246213", id: "1" },
  ];
  return (
    <div className="w-full h-[calc(100%-10px)] flex flex-col-reverse">
      <div className="send">form</div>
      <div className="message-container flex-1">
        <div>
          {conversations.map((conversation) => (
            <h6>{conversation.message}</h6>
          ))}
        </div>
      </div>
    </div>
  );
}
