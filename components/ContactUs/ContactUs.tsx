import React from "react";
import ContactHero from "./ContactHero";
import GetInTouch from "./GetInTouch";
import ContactMap from "./ContactMap";

const ContactUs = () => {
  return (
    <div className="w-full">
      <ContactHero />
      <GetInTouch />
      <ContactMap />
    </div>
  );
};

export default ContactUs;
