import React from "react";

function Container({ className = "", padding = true, gap = true, children }) {
  return (
    <div
      className={`sidebar-container flex flex-col ${gap ? "gap-4" : ""} rounded-xl bg-white ${padding ? "p-8" : ""} ${className}`}
    >
      {children}
    </div>
  );
}

export default Container;
