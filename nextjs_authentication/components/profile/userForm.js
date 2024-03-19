import ProfileForm from "./profileForm";
import classes from "./userForm.module.css";

function UserForm() {
  // Redirect away if NOT auth

  return (
    <section className={classes.profile}>
      <h1>Your User Profile</h1>
      <ProfileForm />
    </section>
  );
}

export default UserForm;
