import React from "react";
import Button from "./Button";
import MyInput from "./MyInput";

function Profile({ data }) {
  return (
    <form>
      <div className="font-bold text-gray-700 space-y-3">
        <div className="flex flex-col">
          <h1>First Name</h1>
          <MyInput value={data.first_name} />
        </div>
        <div className="flex flex-col">
          <h1>Last Name</h1>
          <MyInput value={data.last_name} />
        </div>
        <div className="flex flex-col">
          <h1>Email address</h1>
          <MyInput value={data.email} />
        </div>
        {/* <div className="flex flex-col">
        <h1>institute Name</h1>
        <MyInput value={data.institute.name} />
      </div> */}
        <div className="flex flex-col">
          <h1>Year of passout</h1>
          <MyInput value={data.year_of_passs_out} />
        </div>
        <div className="flex flex-col">
          <h1>Phone number</h1>
          <MyInput value={data.Phone_number} />
        </div>
        <div className="flex flex-col">
          <h1>Date Of Birth</h1>
          <MyInput value={data.date_of_birth} />
        </div>
        <div className="flex flex-col">
          <h1>device you are using to do your assignments</h1>
          <MyInput value={data.work_device} />
        </div>
        <div className="flex flex-col">
          <h1>Institute roll no.</h1>
          <MyInput value={data.institute_roll_no} />
        </div>
        <div className="flex flex-col">
          <h1>Branch</h1>
          <MyInput value={data.branch} />
        </div>
        <Button>Update</Button>
      </div>
    </form>
  );
}
export default Profile;
