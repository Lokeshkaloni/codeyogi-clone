import { Formik } from "formik";
import React from "react";
import Button from "./Button";
import MyInput from "./MyInput";

function Profile({ userData }) {
  console.log(userData);
  if (!userData) return <>data is loading</>;
  return (
    <Formik initialValues={userData}>
      <div className="font-bold text-gray-700 space-y-3">
        <div className="flex flex-col">
          <label>First Name</label>
          <MyInput name="first_name" />
        </div>
        <div className="flex flex-col">
          <label>Last Name</label>
          <MyInput name="last_name" />
        </div>
        <div className="flex flex-col">
          <label>Email address</label>
          <MyInput name="email" type="email" />
        </div>
        <div className="flex flex-col">
          <label>institute Name</label>
          <MyInput name="institute.name" />
        </div>
        <div className="flex flex-col">
          <label>Year of passout</label>
          <MyInput name="year_of_pass_out" />
        </div>
        <div className="flex flex-col">
          <label>Phone number</label>
          <MyInput name="phone_no" />
        </div>
        <div className="flex flex-col">
          <label>Date Of Birth</label>
          <MyInput name="date_of_birth" />
        </div>
        <div className="flex flex-col">
          <label>device you are using to do your assignments</label>
          <MyInput name="work_device" />
        </div>
        <div className="flex flex-col">
          <label>Institute roll no.</label>
          <MyInput name="institute_roll_no" />
        </div>
        <div className="flex flex-col">
          <label>Branch</label>
          <MyInput name="branch" />
        </div>
        <Button>Update</Button>
      </div>
    </Formik>
  );
}
export default Profile;
