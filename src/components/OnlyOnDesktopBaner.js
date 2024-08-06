import React from "react";

export const OnlyOnDesktopBaner = () => {
  return (
    <div className="only-on-desktop-baner">
      <div>
        <p className="only-on-desktop-text">Only desktop version</p>
        <img
          src="/desktop.png"
          alt="Laptop icon"
        ></img>
      </div>
    </div>
  );
};
