import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css';

import "./FormSubmitted.css";
import icon from "../../images/form-submitted.png";


const FormSubmitted = () => {
  return (
    <div className="main-wrapper">
      <div className="text-1">Have ANY questions? FEEL FREE TO drop US a line</div>
      <img src={icon} alt="loading..." /><div className="text-2">THANK YOU! PLEASE CHECK YOUR INBOX</div>
     </div> 
  );
};

export default FormSubmitted;
