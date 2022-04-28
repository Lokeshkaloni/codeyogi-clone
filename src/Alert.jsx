import React, { useContext } from "react";
import cn from "classnames";
import AlertContext from "./AlertContext";

function Alert() {
  const { alert, setAlert } = useContext(AlertContext);
  let themeClass = cn({
    "bg-red-500 border-red-600": alert.type === "error",
  });
  console.log(alert.message, "alert message", alert.type, "alert type");
  if (!alert.message) return <></>;
  return (
    alert.message && (
      <div
        className={
          "fixed top-0 flex justify-between bg-green-500 border-green-600 border w-96 rounded-md px-2 py-4 text-white " +
          themeClass
        }
      >
        <span className="text-2xl">{alert.message}</span>
        <button onClick={() => setAlert({})}>X</button>
      </div>
    )
  );
}
export default Alert;
