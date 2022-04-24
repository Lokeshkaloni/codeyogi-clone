import React from "react";

function Button(props) {
  let themeClass =
    "bg-indigo-600 text-white hover:bg-indigo-400 border-indigo-400";
  if (props.theme === "secondary") {
    themeClass = "bg-white border border-gray-300";
  }
  let borderClass = "rounded-md";
  if (props.border === "full") {
    borderClass = "rounded-full";
  }
  return (
    <button
      disabled={props.disabled}
      onClick={props.onClick}
      className={"px-6 py-2 " + themeClass + "  " + borderClass}
    >
      {props.children}
    </button>
  );
}
export default Button;
