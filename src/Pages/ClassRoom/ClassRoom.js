import React from "react";
import LessonCard from "../../Components/LessonCard";

export default function ClassRoom() {
  const cards = [
    {
      id: "1001",
      title: "Solidity Programming Language",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut cupiditate adipisci, dignissimos obcaecati alias sed neque nam minima nobis tempora. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tempora, magni? Corrupti tempora aut ipsam iste maxime reprehenderit repellendus, eveniet voluptate dolore ipsa facilis tenetur! Molestias quaerat distinctio amet animi ad sit blanditiis similique ut natus in veniam dolorum quidem, corporis necessitatibus. Consectetur quis neque incidunt nulla repellat minima, aliquam maxime.",
      category: "Programming",
      teacher: {
        name: "Habib Ehsanul Haque",
      },
      notifications: true,
    },
    {
      id: "2001",
      title: "Solidity Programming Language and its real life applications",
      description: "Lorem ipsumitate adipisci, dignam minima nobis tempora.",
      category: "Programming",
      teacher: {
        name: "Julker Nayeem",
      },
      notifications: false,
    },
    {
      id: "2002",
      title: "Solidity Programming Language",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut cupiditate adipisci, dignissimos obcaecati alias sed neque nam minima nobis tempora.",
      category: "Programming",
      teacher: {
        name: "Julker Nayeem",
      },
      notifications: true,
    },
  ];

  return (
    <div className="mx-5 mt-5">
      <h1 className="text-[20px] font-semibold">Classroom</h1>
      <div className="card-container">
        {cards.map((card) => (
          <div className="w-full h-full" key={card.id}>
            <LessonCard
              key={card.id}
              title={card.title}
              description={card.description}
              category={card.category}
              teacher={card.teacher}
              date={card.date}
              time={card.time}
              notification={card.notifications}
              button="Visit"
              path="/class"
            ></LessonCard>
          </div>
        ))}
      </div>
    </div>
  );
}
