import React from "react";
import PresentationCard from "./PresentationCard.jsx";

export default function PresentationPart() {
  return (
    <section className="relative flex  bg-transparent items-center px-8 md:px-16 overflow-hidden">
      <div className="relative w-full flex flex-col md:flex-row z-10">
        <div className="w-full md:w-1/2">
          <PresentationCard
            subtitle="UI/UX Designer"
            title="Hello,  my name is Madelyn Torff"
            description="Short text with details about you, what you do or your professional career. You can add more information on the about page."
            button1="Projects"
            button2="Linkedin"
          />
        </div>
      </div>
    </section>
  );
}
