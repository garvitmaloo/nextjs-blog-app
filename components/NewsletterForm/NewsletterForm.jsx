import React, { useRef, useState } from "react";

import classes from "./newsletter-form.module.css";

const NewsletterForm = () => {
  const [registrationSuccessful, setRegistrationSuccessful] = useState(false);
  const [registrationMessage, setRegistrationMessage] = useState("");
  const [displayMessage, setDisplayMessage] = useState(false);

  const nameInputRef = useRef();
  const emailInputRef = useRef();

  function toggleMessageHandler() {
    setDisplayMessage(false);
  }

  async function newsletterFormSubmitHandler(e) {
    e.preventDefault();

    const enteredName = nameInputRef.current.value;
    const enteredEmail = emailInputRef.current.value;

    try {
      const response = await fetch("/api/newsletter", {
        method: "POST",
        body: JSON.stringify({ name: enteredName, email: enteredEmail }),
        headers: { "Content-Type": "application/json" },
      });
      const result = await response.json();

      if (!response.ok) {
        setRegistrationSuccessful(false);
        setRegistrationMessage(result.message);
        setDisplayMessage(true);
      }

      if (response.ok) {
        setRegistrationSuccessful(true);
        setRegistrationMessage(result.message);
        setDisplayMessage(true);
      }
    } catch (err) {
      setRegistrationSuccessful(false);
      setRegistrationMessage("Something went wrong.", err.message);
    }
  }

  const requiredClass = registrationSuccessful
    ? `${classes["message-box"]} ${classes.success}`
    : `${classes["message-box"]} ${classes.error}`;

  return (
    <div className={classes.container}>
      <h1>Subscribe to Newsletter</h1>
      <p>
        Get all the latest posts directly in your inbox. No promotions, no
        spams. Only hand-crafted travel content.
      </p>
      <form onSubmit={newsletterFormSubmitHandler} className={classes.form}>
        <div>
          <label htmlFor="name">Name</label>
          <input ref={nameInputRef} type="text" name="name" id="name" />
        </div>
        <div>
          <label htmlFor="email">Email</label>
          <input ref={emailInputRef} type="email" name="email" id="email" />
        </div>

        <button className={classes["newsletter-btn"]}>Subscribe</button>
      </form>

      {displayMessage && (
        <div className={requiredClass}>
          <p>{registrationMessage}</p>
          <i
            onClick={toggleMessageHandler}
            className="fa-solid fa-circle-xmark"
          ></i>
        </div>
      )}
    </div>
  );
};

export default NewsletterForm;
