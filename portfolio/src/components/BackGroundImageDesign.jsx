import React from "react";

export default function BackGroundImageDesign() {
  return (
    <div
      className="z-10 inset-0 bg-no-repeat bg-right-top pointer-events-none absolute"
      style={{
        backgroundImage: "url('/femme1.png')",
        backgroundSize: "auto 650px",
        backgroundPosition: "right top",
      }}
    />
  );
}
