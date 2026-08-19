import React from "react";
import { FaLinkedin } from "react-icons/fa";

const LINKEDIN_URL = "https://www.linkedin.com/in/abdullah-al-akib-a560b0247/";

const DevCredit = () => {
  return (
    <a
      href={LINKEDIN_URL}
      target="_blank"
      rel="noreferrer"
      aria-label="Developed by MD Abdullah — open LinkedIn profile in a new tab"
      className="group fixed bottom-4 right-4 z-40 flex items-center gap-1.5 rounded-full border border-white/10 bg-secondary/80 px-3 py-1.5 text-white shadow-lg backdrop-blur-md transition-all hover:bg-secondary hover:border-primary/40 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-secondary"
    >
      <FaLinkedin
        size={15}
        className="shrink-0 text-white/80 transition-colors group-hover:text-primary"
      />
      <span className="whitespace-nowrap font-sans text-[11px] sm:text-xs font-medium tracking-wide text-white/90">
        Developed by MD Abdullah
      </span>
    </a>
  );
};

export default DevCredit;
