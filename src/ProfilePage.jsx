import React from "react";
import Header from "./Header";

function ProfilePage() {
  return (
    <div className="w-full flex flex-col justify-center">
      <Header />
      <div className="border px-4 py-8 border-gray-500 h-screen rounded-md mt-1 w-full">
        <h1 className="text-3xl font-bold text-indigo-700">profile view</h1>
      </div>
    </div>
  );
}
export default ProfilePage;
