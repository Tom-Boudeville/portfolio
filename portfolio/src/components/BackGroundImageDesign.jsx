import React from "react";

export default function BackGroundImageDesign() {
  return (
    <div
      className="absolute inset-0 bg-no-repeat bg-right-top z-10 pointer-events-none"
      style={{
        backgroundImage: "url('/femme1.png')",
        backgroundSize: "auto 600px",
        backgroundPosition: "right top",
      }}
    />
  );
}
