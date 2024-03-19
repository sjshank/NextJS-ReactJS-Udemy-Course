import classes from "./landingPage.module.css";

function LandingPageContent() {
  // Show Link to Login page if NOT auth

  return (
    <section className={classes.starting}>
      <h1>Welcome on Board!</h1>
    </section>
  );
}

export default LandingPageContent;
