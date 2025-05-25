import { righteous_font } from "@/utils/fonts";
import React from "react";

const AboutPage = () => {
  return (
    <div className="min-h-screen w-full flex flex-col justify-center items-center overflow-y-auto">
      <main className="flex flex-col justify-center items-center">
        <div
          className={`w-full text-4xl font-bold text-gray-300 ${righteous_font.className}`}
        >
          About Me
        </div>
      </main>
    </div>
  );
};

export default AboutPage;
