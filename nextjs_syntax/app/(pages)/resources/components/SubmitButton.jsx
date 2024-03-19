"use client";
import React from "react";
import { useFormStatus } from "react-dom";

const SubmitButton = () => {
  const formStatus = useFormStatus();

  return (
    <>
      <button type="submit" className="p-3 m-2">
        {formStatus && formStatus?.pending ? "In Process" : "Submit"}
      </button>
      {formStatus && formStatus?.data && <p>Success</p>}
    </>
  );
};

export default SubmitButton;
