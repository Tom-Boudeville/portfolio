import React from "react";
import ProjectSeparator from "./ProjectSeparator";
import Project from "./Project";

export default function ProjectPresentationPart() {
  return (
    <section
      id="projects"
      className="w-full px-8 md:px-16 mt-[100px] flex flex-col space-y-12 max-w-6xl mx-auto"
    >
      <ProjectSeparator />
      <Project
        url="/project1.png"
        title="Project Name"
        description="I created this personal project in order to show how to create an interface in Figma using a portfolio as an example."
        imageFirst={false}
      />

      <Project
        url="/project2.png"
        title="Project Name"
        description="What was your role, your deliverables, if the project was personal, freelancing."
      />

      <Project
        url="/project3.png"
        title="Project Name"
        description="You can also add in this description the type of the project, if it was for web, mobile, electron."
        imageFirst={false}
      />
    </section>
  );
}
