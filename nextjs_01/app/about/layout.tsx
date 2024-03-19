import React from "react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About page",
};

const AboutLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <nav>About Navbar</nav>
      {children}
    </>
  );
};

export default AboutLayout;
