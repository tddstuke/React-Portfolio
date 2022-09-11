import React, { useState, useRef } from "react";
import { validateEmail } from "../../utils/helpers";
import axios from "axios";
import emailjs from "@emailjs/browser";

function ContactForm() {
  const [errorMessage, setErrorMessage] = useState("");

  const [formState, setFormState] = useState({
    name: "",
    email: "",
    message: "",
  });

  const { name, email, message } = formState;
  const form = useRef();
  const sendEmail = (f) => {
    emailjs
      .sendForm(
        process.env.REACT_APP_SERVICE_ID,
        process.env.REACT_APP_TEMPLATE_ID,
        form.current,
        process.env.REACT_APP_PUBLIC_KEY,
        console.log(process.env.REACT_APP_PUBLIC_KEY),
        console.log(process.env.REACT_APP_SERVICE_ID),
        console.log(process.env.REACT_APP_TEMPLATE_ID)
      )
      .then(
        (result) => {
          console.log(result.text);
          alert("Message Sent! Thank You!");
        },
        (error) => {
          console.log(error.text);
          alert(error);
        }
      );
  };

  function handleChange(e) {
    if (e.target.name === "email") {
      const isValid = validateEmail(e.target.value);
      //   isValid conditional statement
      if (!isValid) {
        setErrorMessage("Your email is invalid");
      } else {
        setErrorMessage("");
      }
    } else {
      if (!e.target.value.length) {
        setErrorMessage(`${e.target.name} is required`);
      } else {
        setErrorMessage("");
      }
    }
    if (!errorMessage) {
      setFormState({ ...formState, [e.target.name]: e.target.value });
    }
  }

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      sendEmail();
    } catch (err) {
      console.log(err);
    }
    setFormState({
      name: "",
      email: "",
      message: "",
    });
    e.target.reset();
    console.log(formState);
  };

  return (
    <section className="container mt-5">
      <h3 className="my-4">Contact Me</h3>
      <div className="row">
        <form
          ref={form}
          id="contact-form"
          className="col-md-6 card p-2"
          onSubmit={handleSubmit}
        >
          <div className="form-group">
            <label htmlFor="name">Name:</label>
            <input
              className="form-control"
              type="text"
              defaultValue=""
              onBlur={handleChange}
              name="name"
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email Address:</label>
            <input
              className="form-control"
              type="email"
              defaultValue={email}
              onBlur={handleChange}
              name="email"
            />
          </div>
          <div className="form-group">
            <label htmlFor="message">Message:</label>
            <textarea
              className="form-control"
              name="message"
              defaultValue={message}
              onBlur={handleChange}
              rows="5"
            />
          </div>
          {errorMessage && (
            <div>
              <p className="error-text">{errorMessage}</p>
            </div>
          )}
          <button className="btn col-md-2 mt-3 btn-primary " type="submit">
            Submit
          </button>
        </form>
      </div>
    </section>
  );
}

export default ContactForm;
