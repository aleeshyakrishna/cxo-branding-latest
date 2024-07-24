import React,{useState} from 'react'
import styles from './../Form/Form.module.css'
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer, toast } from "react-toastify";

const Form = () => {
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
    
      const handleSubmit = (e) => {
        e.preventDefault();
        toast.success("Form saved successfully!")
        console.log(formData);
      };
    
  return (
    <div className={styles.form_container}>
      <form onSubmit={handleSubmit}>
        {/* <h3>Kindly fill the form below!</h3> */}
        <input
          type="text"
          name="name"
          placeholder="name"
          value={formData.name}
          onChange={handleChange}
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
          placeholder="contact"
          value={formData.contact}
          onChange={handleChange}
        />
        <input
          type="email"
          name="email"
          placeholder="email"
          value={formData.email}
          onChange={handleChange}
        />
        <input
          type="text"
          name="note"
          placeholder="note"
          value={formData.note}
          onChange={handleChange}
        />
        <input type="file" name="file" onChange={handleChange} />
        {/* <label>
          <input
            type="checkbox"
            name="complimentaryCall"
            checked={formData.complimentaryCall}
            onChange={handleChange}
          />
          I want a 10mins complimentary call!
        </label> */}
        <div className={styles.submitButton}>

        <button type="submit">Submit</button>
        </div>
      </form>
    </div>
  )
}

export default Form
