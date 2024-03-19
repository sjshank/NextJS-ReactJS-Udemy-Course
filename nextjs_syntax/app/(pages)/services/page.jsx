import Consulting from "@/app/components/consulting";
import React, { Suspense } from "react";

const Services = async () => {
  return (
    <>
      <div>
        <h3>Services</h3>
        <br />
        <Suspense fallback={<p>Loading consulting...</p>}>
          <Consulting />
        </Suspense>
      </div>
    </>
  );
};

export default Services;
