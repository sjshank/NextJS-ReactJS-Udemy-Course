import 'server-only'

import React from "react";

const InputElement = ({ label, name }) => {
  return (
    <div>
      <label>{label} :</label>
      <input
        type="text"
        name={name}
        className="p-3 m-2 bg-black border-white"
        style={{
          border: "2px solid white",
        }}
      />
    </div>
  );
};

export default InputElement;
