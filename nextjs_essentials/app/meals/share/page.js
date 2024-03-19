"use client";
import ImagePicker from "@/components/share-meal/image-picker";
import classes from "./page.module.css";
import { ShareMealAction } from "@/lib/actions";
import ShareMealFormSubmit from "@/components/share-meal/share-meal-form-submit";
import { useFormState } from "react-dom";

export default function ShareMealPage() {
  const [state, formAction] = useFormState(ShareMealAction, { message: null });
  return (
    <>
      <header className={classes.header}>
        <h1>
          Share your <span className={classes.highlight}>favorite meal</span>
        </h1>
      </header>
      <main className={classes.main}>
        <form className={classes.form} action={formAction}>
          <div className={classes.row}>
            <p>
              <label htmlFor="name">Name</label>
              <input type="text" id="name" name="name" required />
            </p>
            <p>
              <label htmlFor="email">Email</label>
              <input type="email" id="email" name="email" required />
            </p>
          </div>
          <p>
            <label htmlFor="title">Title</label>
            <input type="text" id="title" name="title" required />
          </p>
          <p>
            <label htmlFor="summary">Summary</label>
            <input type="text" id="summary" name="summary" required />
          </p>
          <p>
            <label htmlFor="instructions">Instructions</label>
            <textarea
              id="instructions"
              name="instructions"
              rows={10}
              required
            />
          </p>
          <ImagePicker label="pick an image" name="image" />
          {state.message && (
            <p className={classes.validationErr}>{state.message}</p>
          )}
          <p className={classes.actions}>
            <ShareMealFormSubmit />
          </p>
        </form>
      </main>
    </>
  );
}
