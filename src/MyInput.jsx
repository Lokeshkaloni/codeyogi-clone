import React from "react";

function MyInput(props) {
  return (
    <div className="flex flex-col">
      <input
        value={props.value}
        onChange={props.onChange}
        type="text"
        placeholder={props.placeholder}
        className="py-4 px-5 w-full rounded-md border border-indigo-700 bg-gray-100"
      />
    </div>
  );
}
export default MyInput;
