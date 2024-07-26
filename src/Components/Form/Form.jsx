import React, { useState } from 'react';
import styles from './../Form/Form.module.css';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer, toast } from "react-toastify";
import axios from '../../Utils/BaseUrl'; // Make sure you have axios installed
// { apiEndpoint }
const Form = () => {
  console.log(apiEndpoint, "ppp");
  const [formData, setFormData] = useState({
    name: '',
    gender: '',
    contact: '',
    email: '',
    note: '',
    file: null,
    complimentaryCall: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked, files } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : type === 'file' ? files[0] : value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formDataToSend = new FormData();
    Object.keys(formData).forEach(key => {
      if (key === 'file') {
        formDataToSend.append(key, formData[key]); // Append file separately
      } else {
        formDataToSend.append(key, formData[key]);
      }
    });

    try {
      // const response = await axios.post(apiEndpoint, formDataToSend, {
      //   headers: {
      //     'Content-Type': 'multipart/form-data',
      //   },
      // });
      toast.success("Form submitted successfully!");
      // console.log(response.data);
    } catch (error) {
      toast.error("Error submitting form: " + error.message);
      console.error(error);
    }
  };

  return (
    <div className={styles.form_container}>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Name"
          value={formData.name}
          onChange={handleChange}
          required
        />
        <div>
          <label>
            <input
              type="radio"
              name="gender"
              value="Male"
              checked={formData.gender === 'Male'}
              onChange={handleChange}
            />
            Male
          </label>
          <label>
            <input
              type="radio"
              name="gender"
              value="Female"
              checked={formData.gender === 'Female'}
              onChange={handleChange}
            />
            Female
          </label>
        </div>
        <input
          type="text"
          name="contact"
          placeholder="Contact"
          value={formData.contact}
          onChange={handleChange}
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="note"
          placeholder="Note"
          value={formData.note}
          onChange={handleChange}
        />
        <input
          type="file"
          name="file"
          onChange={handleChange}
        />
        <label>
          <input
            type="checkbox"
            name="complimentaryCall"
            checked={formData.complimentaryCall}
            onChange={handleChange}
          />
          I want a 10-minute complimentary call!
        </label>
        <div className={styles.submitButton}>
          <button type="submit">Submit</button>
        </div>
      </form>
      <ToastContainer />
    </div>
  );
};

export default Form;
