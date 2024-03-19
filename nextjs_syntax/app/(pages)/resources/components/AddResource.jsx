"use client";

import React from "react";
//this file is consuming server actions which can be used inside useEffect, event handlers
const AddResource = ({ createResource }) => {
  return (
    <button
      type="submit"
      role="button"
      className="text-lime-500 text-2xl"
      onClick={async () => {
        await createResource();
      }}
    >
      Add Random Resource
    </button>
  );
};

export default AddResource;
