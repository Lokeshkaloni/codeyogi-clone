import React from "react";

function Card(props) {
  return <div className="shadow-lg border rounded-md">{props.children}</div>;
}
export default Card;
