import axios from "axios";
import React, { useEffect, useState } from "react";
import Header from "./Header";
import Profile from "./Profile";
import { DateTime } from "luxon";

function ProfilePage() {
  const [userData, setUserData] = useState();

  useEffect(() => {
    const userDataPromise = axios.get(`https://api.codeyogi.io/me`, {
      withCredentials: true,
    });
    userDataPromise.then((response) => {
      setUserData(response.data.data);
    });
  }, []);

  // const onSubmit = () => {
  //   axios.put(`https://api.codeyogi.io/me`, { withCredentials: true });
  // };
  console.log(userData);
  return (
    <div className="w-full flex flex-col justify-center">
      <Header />
      <div className="border px-4 py-8 border-gray-500 rounded-md mt-1 w-full">
        <h1 className="text-3xl font-bold text-indigo-700">Personal Details</h1>
        <div className="mt-4 space-y-2">
          <Profile userData={userData}></Profile>
        </div>
      </div>
    </div>
  );
}
export default ProfilePage;
