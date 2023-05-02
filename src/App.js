import React from 'react';
import { useForm, Controller } from 'react-hook-form';
import './style.css';

const FormComponent = ({ stavka }) => {
  const { handleSubmit, control, formState } = useForm();

  const onEnterKey = (event) => {
    if (event.keyCode === 13 && event.target && event.target.form) {
      const form = event.target.form;
      const index = Array.prototype.indexOf.call(form, event.target);
      for (let i = index + 1; i < form.elements.length; i++) {
        const nextElement = form.elements[i];
        if (nextElement.tabIndex === -1) {
          continue;
        }
        if (nextElement.required) {
          nextElement.focus();
          break;
        }
      }
    }
  };

  const handleInputChange = () => {
    // No need to manually update the form data
  };

  const onSubmit = (data) => {
    // Handle form submission
    console.log(data);
    alert(JSON.stringify(data, null, 2));

    // Find the next required field and focus on it
    const form = document.querySelector('form');
    for (let i = 0; i < form.elements.length; i++) {
      const nextElement = form.elements[i];
      if (nextElement.required) {
        nextElement.focus();
        break;
      }
    }
  };

  return (
    <form onKeyUp={onEnterKey} onSubmit={handleSubmit(onSubmit)}>
      <Controller
        name="input1"
        control={control}
        defaultValue=""
        rules={{ required: true }}
        render={({ field }) => <input {...field} autoFocus />}
      />
      <Controller
        name="input2"
        control={control}
        defaultValue=""
        rules={{ required: true }}
        render={({ field }) => <input {...field} />}
      />
      <Controller
        name="input3"
        control={control}
        defaultValue=""
        render={({ field }) => <input {...field} />}
      />
      <Controller
        name="input4"
        control={control}
        defaultValue=""
        render={({ field }) => <input {...field} />}
      />
      <Controller
        name="input5"
        control={control}
        defaultValue=""
        render={({ field }) => <input {...field} />}
      />
      <button type="submit">Save</button>
    </form>
  );
};

export default FormComponent;
