import React from "react";
import StudentDetail from "./StudentDetail";

function StudentsPage() {
  return (
    <div class="flex flex-wrap justify-between shrink-0">
      <StudentDetail
        link="https://images.unsplash.com/photo-1519345182560-3f2917c472ef?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80"
        twitter="https://www.clipartmax.com/png/full/39-397758_twitter-transparent-background-twitter-black-icon-png.png"
        name="lokesh kaloni"
        title="Senior Designer"
      ></StudentDetail>
      <StudentDetail
        link="https://media.istockphoto.com/photos/one-businesswoman-studio-portrait-looking-at-the-camera-picture-id1317804584?s=612x612"
        name="Riya Oberoy"
        title="SEnior Designer"
        twitter="https://www.clipartmax.com/png/full/39-397758_twitter-transparent-background-twitter-black-icon-png.png"
      ></StudentDetail>
      <StudentDetail
        name="Vikas Mehra"
        link="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1480&q=80"
        title="Senior Designer"
        twitter="https://www.clipartmax.com/png/full/39-397758_twitter-transparent-background-twitter-black-icon-png.png"
      ></StudentDetail>
      <StudentDetail
        name="Yogi Adityanath"
        link="https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80"
        title="Senior Designer"
        twitter="https://www.clipartmax.com/png/full/39-397758_twitter-transparent-background-twitter-black-icon-png.png"
      ></StudentDetail>
      <StudentDetail
        name="Jagdish Ghosh"
        title="Senior Designer"
        twitter="https://www.clipartmax.com/png/full/39-397758_twitter-transparent-background-twitter-black-icon-png.png"
        link="https://images.unsplash.com/photo-1629425733761-caae3b5f2e50?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80"
      ></StudentDetail>
      <StudentDetail
        name="Pankaj Tripathi"
        title="Senior Designer"
        twitter="https://www.clipartmax.com/png/full/39-397758_twitter-transparent-background-twitter-black-icon-png.png"
        link="https://images.unsplash.com/photo-1600878459138-e1123b37cb30?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=406&q=80"
      ></StudentDetail>
    </div>
  );
}
export default StudentsPage;
