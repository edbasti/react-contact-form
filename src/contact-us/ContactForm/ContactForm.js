import { useState } from 'react';
import { useForm } from 'react-hook-form';
import icon from "../../images/form-submitted.png";

import "./ContactForm.css";

const ContactForm = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors }
  } = useForm();
  const [disabled, setDisabled] = useState(false);

  const [isSubmitted, setIsSubmitted] = useState(false);
  const handleSetSubmitted = () => {
    setIsSubmitted(true);
  }

  // Function called on submit
  const onSubmit = async () => {
    // Destrcture data object
    try {
      // Disable form while processing submission
      setDisabled(true);
      // Reset contact form fields after submission
      reset();
      // Re-enable form submission
      setDisabled(false);
      setTimeout(() => {handleSetSubmitted()}, 2000);
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <div className="contact-main-wrapper">
      <div className="form-header">
        Have ANY questions? FEEL FREE TO drop US a line
      </div>
      {isSubmitted ?
        <div className="text-2-wrapper">
          <img src={icon} alt="loading..." /><div className="text-2">THANK YOU! PLEASE CHECK YOUR INBOX</div>
        </div> :
        <form id='contact-form' onSubmit={handleSubmit(onSubmit)} noValidate>
          {/* Row 1 of form */}
          <div className='row formRow'>
            <div className='col-6 field-container'>
            <div className="input-label">NAME</div>
              <input
                type='text'
                name='name'
                {...register('name', {
                  required: {
                    value: true,
                    message: 'Please enter your name'
                  },
                  maxLength: {
                    value: 30,
                    message: 'Please use 30 characters or less'
                  }
                })}
                className='form-control formInput input-field'
                placeholder='John Doe'
              ></input>
              {errors.name && <span className='errorMessage'>{errors.name.message}</span>}
            </div>
          </div>
          <div className='row formRow'>
            <div className='col-6 field-container'>
            <div className="input-label">EMAIL</div>
              <input
                type='email'
                name='email'
                {...register('email', {
                  required: true,
                  pattern:
                    /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
                })}
                className='form-control formInput input-field'
                placeholder='johndoe@gmail.com'
              ></input>
              {errors.email && (
                <span className='errorMessage'>Please enter a valid email address</span>
              )}
            </div>
          </div>
          <div className='row formRow'>
            <div className='col-6 field-container'>
            <div className="input-label">PHONE NUMBER</div>
              <input
                type='text'
                name='phone_number'
                {...register('phone_number', {
                  required: true,
                  pattern:
                    /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/
                })}
                className='form-control formInput input-field'
                placeholder='+1 456 4567843'
              ></input>
              {errors.phone_number && (
                <span className='errorMessage'>Please enter a valid phone number</span>
              )}
            </div>
          </div>
          <div className='row formRow'>
            <div className='col' field-container>
              <div className="input-label">MESSAGE</div>
              <textarea
                rows={8}
                name='message'
                {...register('message', {
                  required: true
                })}
                className='form-control formInput input-field'
                placeholder='How we can help you?'
              ></textarea>
              {errors.message && <span className='errorMessage'>Please enter a message</span>}
            </div>
          </div>

          <button className='submit-btn send-button' disabled={disabled} type="submit">
            SEND MESSAGE
          </button>
        </form>
    }
    </div>
  );
};

export default ContactForm;
