import { jura_font } from "@/utils/fonts";
import React from "react";

const ContactSection = () => {
  return (
    <section
      id="contact"
      className="flex items-center justify-center w-full h-full min-h-screen overflow-hidden"
    >
      <div className={`text-4xl ${jura_font.className} font-bold text-white`}>
        {"Let's get in touch!"}
      </div>
    </section>
  );
};

export default ContactSection;
