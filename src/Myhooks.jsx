import { useState } from "react";

export const useForm = (initialValue, submitFunction) => {
  const [formData, setFormData] = useState(initialValue);

  const handleChange = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };
  const onFormSubmit = (event) => {
    event.preventDefault();
    submitFunction(event);
  };
  return { formData, handleChange, onFormSubmit };
};
