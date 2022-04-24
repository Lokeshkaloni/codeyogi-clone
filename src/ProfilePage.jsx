import axios from "axios";
import React, { useEffect, useState } from "react";
import Header from "./Header";
import Profile from "./Profile";

function ProfilePage() {
  const [data, setData] = useState({
    data: {},
  });

  useEffect(() => {
    const userDataPromise = axios.get(`https://api.codeyogi.io/me`, {
      withCredentials: true,
    });
    userDataPromise.then((response) => {
      setData(response.data);
    });
  }, []);

  return (
    <div className="w-full flex flex-col justify-center">
      <Header />
      <div className="border px-4 py-8 border-gray-500 rounded-md mt-1 w-full">
        <h1 className="text-3xl font-bold text-indigo-700">Personal Details</h1>
        <div className="mt-4 space-y-2">
          <Profile data={data}></Profile>
        </div>
      </div>
    </div>
  );
}
export default ProfilePage;
