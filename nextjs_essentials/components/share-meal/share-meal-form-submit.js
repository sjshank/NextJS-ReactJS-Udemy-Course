"use client";

import { useFormStatus } from "react-dom";

export default function ShareMealFormSubmit() {
  const { pending } = useFormStatus();
  return (
    <button type="submit" disabled={pending}>
      {pending ? "Processing Request..." : "Share Meal"}
    </button>
  );
}
