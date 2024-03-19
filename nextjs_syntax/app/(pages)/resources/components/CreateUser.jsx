"use client";

import { createUser } from "@/app/actions";
import React from "react";
import SubmitButton from "./SubmitButton";

const CreateUser = ({children}) => {
  return (
    <div className="flex flex-col">
      <h3 className="p-5">Create User</h3>
      <form action={createUser}>
        {children[0]}
        <br />
        {children[1]}
        <br />
        <SubmitButton />
      </form>
    </div>
  );
};

export default CreateUser;
