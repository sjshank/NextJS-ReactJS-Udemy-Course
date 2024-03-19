import { useRef, useContext } from "react";
import classes from "./newsletter-registration.module.css";
import NotificationContext from "@/store/notification-context";

function NewsletterRegistration() {
  const notificationCtx = useContext(NotificationContext);

  const emailRef = useRef();
  function registrationHandler(event) {
    event.preventDefault();
    fetch("/api/newsletter", {
      method: "POST",
      body: JSON.stringify({ email: emailRef.current.value }),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => {
        notificationCtx.showNotification({
          title: "Success !",
          message: "Registration is successfull.",
          status: "success",
        });
        emailRef.current.value = "";
      })
      .catch((err) => {
        notificationCtx.showNotification({
          title: "Error !",
          message: "Registration failed.",
          status: "error",
        });
      });
  }

  return (
    <section className={classes.newsletter}>
      <h2>Sign up to stay updated!</h2>
      <form onSubmit={registrationHandler}>
        <div className={classes.control}>
          <input
            type="email"
            id="email"
            placeholder="Your email"
            aria-label="Your email"
            ref={emailRef}
          />
          <button>Register</button>
        </div>
      </form>
    </section>
  );
}

export default NewsletterRegistration;
