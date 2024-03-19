import { useState, useRef } from "react";
import classes from "./authForm.module.css";
import { signIn } from "next-auth/react";

function Auth() {
  const [isLogin, setIsLogin] = useState(true);
  const emailRef = useRef();
  const passwordRef = useRef();

  function switchAuthModeHandler() {
    setIsLogin((prevState) => !prevState);
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (isLogin) {
      const result = await signIn("credentials", {
        redirect: false,
        email: emailRef.current.value,
        password: passwordRef.current.value,
      });
      if (!result.error) {
        // set state
      }
    } else {
      const res = await fetch("/api/auth/signup", {
        method: "POST",
        body: JSON.stringify({
          email: emailRef.current.value,
          password: passwordRef.current.value,
        }),
        headers: {
          "Content-Type": "application/json",
        },
      });
      if (!res.ok) {
        alert("Error");
      }
      const data = await res.json();
      console.log(data);
    }
  };

  return (
    <section className={classes.auth}>
      <h1>{isLogin ? "Login" : "Sign Up"}</h1>
      <form onSubmit={handleSubmit}>
        <div className={classes.control}>
          <label htmlFor="email">Your Email</label>
          <input type="email" id="email" required ref={emailRef} />
        </div>
        <div className={classes.control}>
          <label htmlFor="password">Your Password</label>
          <input type="password" id="password" required ref={passwordRef} />
        </div>
        <div className={classes.actions}>
          <button type="submit">{isLogin ? "Login" : "Create Account"}</button>
          <button
            type="button"
            className={classes.toggle}
            onClick={switchAuthModeHandler}
          >
            {isLogin ? "Create new account" : "Login with existing account"}
          </button>
        </div>
      </form>
    </section>
  );
}

export default Auth;
