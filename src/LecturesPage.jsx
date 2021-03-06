import React, { useEffect, useState } from "react";
import { getLectures } from "./Api";

import LectureDetail from "./LectureDetail";

function LecturesPage(props) {
  const [lectures, setLectures] = useState([]);

  useEffect(() => {
    const token = getLectures();

    token.then((response) => {
      setLectures(response.data);
    });
  }, []);

  return (
    <div className="p-4 grow">
      <h1 className="font-bold p-4 text-2xl">Lectures</h1>
      <div className="space-y-2 px-8 py-4 bg-white flex flex-col items-stretch p-2">
        {lectures.map((l) => (
          <LectureDetail lecture={l} />
        ))}
      </div>
    </div>
  );
}
export default LecturesPage;
