import axios from "axios";

export const getAssignments = () =>
  axios.get("https://api.codeyogi.io/batches/1/assignments", {
    withCredentials: true,
  });

export const getLectures = () =>
  axios.get("https://api.codeyogi.io/batches/1/sessions", {
    withCredentials: true,
  });
