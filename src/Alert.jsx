import React, { useContext } from "react";
import cn from "classnames";
import AlertContext from "./AlertContext";

function Alert() {
  const { alert, setAlert, removeAlert } = useContext(AlertContext);
  let themeClass = cn({
    "bg-red-500 border-red-600": alert.type === "error",
  });
  console.log(alert.message, "alert message", alert.type, "alert type");
  if (!alert.message) return <></>;
  return (
    alert.message && (
      <div className="fixed top-4 flex left-12 flex-col items-center w-full">
        <div
          className={
            "fixed center flex justify-between items-center bg-green-500 border-green-600 border w-96 rounded-md px-2 py-4 text-white " +
            themeClass
          }
        >
          <span className="text-2xl">{alert.message}</span>
          <button
            className="py-2 px-3 font-bold border-2 hover:bg-red-500"
            onClick={() => removeAlert()}
          >
            X
          </button>
        </div>
      </div>
    )
  );
}
export default Alert;
