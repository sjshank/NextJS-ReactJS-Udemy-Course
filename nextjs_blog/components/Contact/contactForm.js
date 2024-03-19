import React, { useState } from "react";
import classes from "./contactForm.module.css";
import toast from "react-hot-toast";

const ContactForm = () => {
  const [contact, setContact] = useState({ email: "", name: "", message: "" });
  const handleChange = (e) => {
    setContact((contact) => ({
      ...contact,
      [e.target.id]: e.target.value,
    }));
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        body: JSON.stringify(contact),
        headers: {
          "Content-Type": "application/json",
        },
      });
      const data = await res.json();
      if (res.status === 200) {
        toast.success("Successfully submitted!");
        setContact({ email: "", name: "", message: "" });
      } else {
        toast.error(data.message);
      }
    } catch (err) {
      toast.error("Something went wrong");
    }
  };
  return (
    <>
      <section className={classes.contact}>
        <h1>How can I help you ?</h1>
        <form onSubmit={handleFormSubmit} className={classes.form}>
          <div className={classes.controls}>
            <div className={classes.control}>
              <label htmlFor="email">Your Email</label>
              <input
                type="email"
                id="email"
                required
                value={contact.email}
                onChange={handleChange}
              />
            </div>
            <div className={classes.control}>
              <label htmlFor="name">Your Name</label>
              <input
                type="text"
                id="name"
                required
                value={contact.name}
                onChange={handleChange}
              />
            </div>
          </div>
          <div className={classes.control}>
            <label htmlFor="message">Your Message</label>
            <textarea
              id="message"
              rows={5}
              required
              value={contact.message}
              onChange={handleChange}
            />
          </div>
          <div className={classes.actions}>
            <button>Submit</button>
          </div>
        </form>
      </section>
    </>
  );
};

export default ContactForm;
