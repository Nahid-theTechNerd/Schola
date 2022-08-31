import React from "react";
import FullCalendar from "@fullcalendar/react"; // must go before plugins
import dayGridPlugin from "@fullcalendar/daygrid"; // a plugin!
import EventCard from "./EventCard";

export default function Calendar() {
  const events = [
    { title: "Solidity Class", date: "2022-09-01", time: "10:30AM" },
    { title: "Solidity Class", date: "2022-09-01", time: "10:30AM" },
    { title: "Solidity Class", date: "2022-09-01", time: "10:30AM" },
    { title: "Extra Class", date: "2022-09-20", time: "10:30AM" },
  ];

  return (
    <div className="mx-5 mt-5">
      <div>
        <h1 className="text-[20px] font-semibold pb-4">Calendar</h1>
      </div>
      <div className="div flex gap-4 w-full h-full">
        <div className="event flex-1">
          <h1 className="Events text-[1.75em] ">Events</h1>
          <div className="details">
            {/* TODO: Event list will be added here */}
            {events.map((event) => (
              <EventCard
                title={event.title}
                date={event.date}
                time={event.time}
                key={event.id}
              ></EventCard>
            ))}
          </div>
        </div>
        <div className="calendar flex-1">
          <FullCalendar
            events={events}
            className="text-[#333]"
            plugins={[dayGridPlugin]}
            initialView="dayGridMonth"
          />
        </div>
      </div>
    </div>
  );
}
