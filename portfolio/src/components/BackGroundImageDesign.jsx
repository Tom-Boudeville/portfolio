import React from "react";

export default function BackGroundImageDesign() {
  return (
    <div
      className="fixed -z-10 inset-0 bg-no-repeat bg-right-top pointer-events-none"
      style={{
        backgroundImage: "url('/femme1.png')",
        backgroundSize: "auto 650px",
        backgroundPosition: "right top",
      }}
    />
  );
}
