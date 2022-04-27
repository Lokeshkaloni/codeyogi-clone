import { useField } from "formik";
import { DateTime } from "luxon";
import React from "react";

function DateTimeInput({ id, type, name, ...rest }) {
  const [field] = useField(name);

  return (
    <div className="flex flex-col">
      <input
        value={DateTime.fromISO(field.value).toLocaleString(DateTime.DATE_FULL)}
        onChange={field.onChange}
        onBlur={field.onBlur}
        type={type || "text"}
        id={id}
        name={name}
        {...rest}
        className="py-4 px-5 w-full rounded-md border border-indigo-700 bg-gray-100"
      />
      {/* <div className="h-5">
        {touched && error && <span className="text-red-500">{error}</span>}
      </div> */}
    </div>
  );
}
export default DateTimeInput;
