import React from "react";
import ProjectSeparator from "./ProjectSeparator";
import Project from "./Project";

export default function ProjectPresentationPart() {
  return (
    <div
      className="flex flex-col items-center space-y-12 max-w-4xl mx-auto px-4"
      style={{ width: "67%", margin: "0 auto" }}
    >
      <ProjectSeparator />
      <Project
        url="/project1.png"
        title="Project 1"
        description="I created this personal project in order to show how to create an interface in Figma using a portfolio as an example."
        imageFirst={false}
      />

      <Project
        url="/project2.png"
        title="Project 2"
        description="What was your role, your deliverables, if the project was personal, freelancing."
      />

      <Project
        url="/project3.png"
        title="Project 3"
        description="You can also add in this description the type of the project, if it was for web, mobile, electron."
        imageFirst={false}
      />
    </div>
  );
}
