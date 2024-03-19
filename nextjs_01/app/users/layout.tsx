import React from "react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Users Page",
};

const UsersLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      {children}
    </>
  );
};

export default UsersLayout;
