import React from "react";
import LessonCard from "../../Components/LessonCard";

export default function AddTeacher() {
  const cards = [
    {
      id: "1001",
      title: "Solidity Programming Language",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut cupiditate adipisci, dignissimos obcaecati alias sed neque nam minima nobis tempora. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tempora, magni? Corrupti tempora aut ipsam iste maxime reprehenderit repellendus, eveniet voluptate dolore ipsa facilis tenetur! Molestias quaerat distinctio amet animi ad sit blanditiis similique ut natus in veniam dolorum quidem, corporis necessitatibus. Consectetur quis neque incidunt nulla repellat minima, aliquam maxime.",
      category: "Programming",
      price: "199",
      date: "08/12/2022",
      time: "08:30AM",
    },
    {
      id: "2001",
      title: "Solidity Programming Language",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut cupiditate adipisci, dignissimos obcaecati alias sed neque nam minima nobis tempora.",
      category: "Programming",
      price: "199",
      date: "08/12/2022",
      time: "08:30AM",
    },
  ];

  return (
    <div className="mx-5 mt-5">
      <h1 className="text-[20px] font-semibold mb-4">Take a lesson</h1>
      <div className="flex  gap-8">
        <div className="lessons w-[65%]">
          {cards.map((card) => (
            <LessonCard
              key={card.id}
              title={card.title}
              description={card.description}
              category={card.category}
              price={card.price}
              date={card.date}
              time={card.time}
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
