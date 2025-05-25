import { jura_font } from "@/utils/fonts";
import React from "react";

const ProjectsSection = () => {
  return (
    <section
      id="projects"
      className="flex items-center justify-center w-full h-full min-h-screen overflow-hidden"
    >
      <div className={`text-4xl ${jura_font.className} font-bold text-white`}>
        {"Featured Projects"}
      </div>
    </section>
  );
};

export default ProjectsSection;
