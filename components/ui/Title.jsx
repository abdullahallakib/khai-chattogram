import React from "react";

const Title = ({ children, addClass, serif }) => {
  return (
    <div
      className={`${addClass} ${
        serif ? "font-bengaliSerif" : "font-bengali"
      } font-bold leading-snug tracking-normal`}
    >
      {children}
    </div>
  );
};

export default Title;
