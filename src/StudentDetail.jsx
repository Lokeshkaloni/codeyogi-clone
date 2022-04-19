import React from "react";
import Card from "./Card";

function StudentDetail(data) {
  return (
    <Card>
      <div class="p-5 overflow-hidden my-1 flex flex-col flex-wrap justify-between items-center bg-gray-800 rounded-md h-75 w-90 shrink 0">
        <img
          class="rounded-full object-cover h-24 w-24"
          src={data.link}
          alt=""
        />
        <div class="flex flex-row items-center mt-8 justify-between ">
          <div class="flex-1 shrink-0">
            <h2 class="flex flex-col font-bold - text-white">
              {data.name} <span class="text-violet-600">{data.title}</span>
            </h2>
          </div>
          <div class="flex shrink-0">
            <img class="h-8 w-8" src={data.twitter} alt="" />
          </div>
        </div>
      </div>
    </Card>
  );
}
export default StudentDetail;
