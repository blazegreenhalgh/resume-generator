import React from "react";
import Container from "./Container";

function ColorPicker({ colors, setFormatting }) {
  return (
    <Container
      className="sidebar-colours flex flex-col gap-2 px-4 py-4"
      padding={false}
      gap={false}
    >
      {Object.entries(colors).map(([color, values]) => (
        <button
          key={color}
          data-tooltip={color[0].toUpperCase() + color.slice(1)}
          className={`swatch ${values.main} relative h-10 w-10 cursor-pointer rounded-lg after:pointer-events-none after:absolute after:top-[calc(100%+1px)] after:left-1/2 after:z-10 after:mb-2 after:-translate-x-1/2 after:rounded after:bg-black after:px-2 after:py-1 after:text-xs after:text-white after:opacity-0 after:content-[attr(data-tooltip)] hover:after:opacity-100`}
          onClick={() =>
            setFormatting((prev) => ({
              ...prev,
              accentColor: values.main,
              backgroundColor: values.background,
            }))
          }
        ></button>
      ))}
    </Container>
  );
}

export default ColorPicker;
