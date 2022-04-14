import MDEditor from "@uiw/react-md-editor";
import React from "react";
import { DateTime } from "luxon";
import Card from "./Card";
function LectureDetail({ lecture }) {
  return (
    <Card>
      <div className="px-6 py-2 mt-4 font-bold flex space-x-6">
        <h1>Lecture #{lecture.id}</h1>
        <h1 className="text-gray-500">
          {DateTime.fromISO(lecture.start_time).toLocaleString(
            DateTime.DATE_MED
          )}
        </h1>
      </div>
      <h1>
        <MDEditor.Markdown source={lecture.topic} />{" "}
      </h1>
      <div className="flex justify-center items-center text-gray-600 my-3">
        <svg
          stroke="currentColor"
          fill="currentColor"
          stroke-width="0"
          viewBox="0 0 512 512"
          class="w-4 h-4 sm:w-6 sm:h-6"
          aria-hidden="true"
          height="1em"
          width="1em"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M405.34 405.332H106.66V106.668H240V64H106.66C83.191 64 64 83.197 64 106.668v298.664C64 428.803 83.191 448 106.66 448h298.68c23.469 0 42.66-19.197 42.66-42.668V272h-42.66v133.332zM288 64v42.668h87.474L159.999 322.133l29.866 29.866 215.476-215.47V224H448V64H288z"></path>
        </svg>
        <a href={lecture.recording_url}> watch/Download recording</a>
      </div>
    </Card>
  );
}
export default LectureDetail;
