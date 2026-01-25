import React from "react";
import Container from "./Container";

function LayoutPicker({ setFormatting }) {
  const layoutOptions = ["top", "left"];
  const iconClasses = {
    top: "before:h-1/2 before:w-full before:rounded-t-lg",
    left: "before:w-1/2 before:h-full before:rounded-l-lg",
  };
  return (
    <Container
      className="sidebar-colours flex flex-col gap-2 px-4 py-4"
      padding={false}
      gap={false}
    >
      {layoutOptions.map((layout) => (
        <button
          key={layout}
          data-tooltip={layout[0].toUpperCase() + layout.slice(1)}
          className={`swatch relative h-10 w-10 cursor-pointer rounded-lg bg-gray-200 ${iconClasses[layout]} before:absolute before:top-0 before:left-0 before:z-10 before:bg-blue-500 after:pointer-events-none after:absolute after:top-[calc(100%+1px)] after:left-1/2 after:z-100 after:mb-2 after:-translate-x-1/2 after:rounded after:bg-black after:px-2 after:py-1 after:text-xs after:text-white after:opacity-0 after:content-[attr(data-tooltip)] hover:after:opacity-100`}
          onClick={() =>
            setFormatting((prev) => ({
              ...prev,
              layout: layout,
            }))
          }
        ></button>
      ))}
    </Container>
  );
}

export default LayoutPicker;
