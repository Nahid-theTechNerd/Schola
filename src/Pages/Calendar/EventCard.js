import React from "react";

export default function EventCard(props) {
  const date = props.date.split("-", 3);
  const month = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];
  return (
    <div className="h-[80px] w-full mt-3 pl-4 min-w-[400px] bg-white bg-opacity-50 rounded flex items-center gap-4">
      <div className="date bg-url bg-opacity-20 h-14 w-14 rounded-md flex items-center justify-center flex-col">
        <p className="text-xl font-semibold">{date[2]}</p>
        <p className="text-sm text-url">{month[date[1] - 1]}</p>
      </div>
      <div className="event-details">
        <h1 className="font-semibold ">{props.title}</h1>
        <p>
          {props.date} {props.time}
        </p>
      </div>
    </div>
  );
}
