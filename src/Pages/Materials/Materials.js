import React from "react";
import MaterialCard from "../../Components/MaterialCard";

export default function Materials() {
  const Materials = [
    { title: "Note of loops", type: "pdf", url: "" },
    { title: "Note of OOP", type: "pptx", url: "" },
    { title: "Note of Inheritance", type: "pdf", url: "" },
    { title: "Note of Polymorphism", type: "pptx", url: "" },
  ];
  return (
    <div className="flex flex-col gap-2">
      {Materials.map((Material) => (
        <MaterialCard
          title={Material.title}
          type={Material.type}
          url={Material.url}
        ></MaterialCard>
      ))}
    </div>
  );
}
