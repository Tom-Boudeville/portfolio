import React from "react";
import PresentationCard from "./PresentationCard.jsx";

export default function PresentationPart() {
  return (
    <section className="relative flex  bg-transparent items-center px-8 md:px-16 overflow-hidden">
      <div className="relative w-full flex flex-col md:flex-row z-10">
        <div className="w-full md:w-1/2">
          <PresentationCard />
        </div>
      </div>
    </section>
  );
}
