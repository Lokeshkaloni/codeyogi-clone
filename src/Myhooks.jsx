import { useState } from "react";

export const useForm = (initialValue, submitFunction) => {
  const [formData, setFormData] = useState(initialValue);

  const handleChange = (event) => {
    console.log(event.target.value);
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };
  const onFormSubmit = (event) => {
    event.preventDefault();
    submitFunction(event);
  };
  return { formData, handleChange, onFormSubmit };
};
