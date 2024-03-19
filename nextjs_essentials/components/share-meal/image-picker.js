"use client";

import { useRef, useState } from "react";
import classes from "./image-picker.module.css";

export default function ImagePicker({ label, name }) {
  const [file, setFile] = useState(null);
  const imageInputRef = useRef();
  const handlePickImage = () => {
    imageInputRef.current.click();
  };
  const handleFileChange = (event) => {
    setFile(event.target.files[0]);
  };

  return (
    <div className={classes.picker}>
      <label htmlFor={name}>{label}</label>
      <div>
        <input
          type="file"
          className={classes.input}
          id={name}
          name={name}
          accept="image/png, image/jpeg"
          ref={imageInputRef}
          onChange={handleFileChange}
          required
        />
        <button
          className={classes.button}
          type="button"
          onClick={handlePickImage}
        >
          Pick an Image
        </button>
        <span className={classes.fileName}>{file?.name}</span>
      </div>
    </div>
  );
}
