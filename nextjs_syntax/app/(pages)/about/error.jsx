"use client";

import { useEffect } from "react";


//It will automatically create errorboundary for about segment & it's child
//It should be client component
//It will not catch any error occured inside layout.js/template.js. That will be catch by parent error boundary
export default function Error({ params }) {
  const { error, reset } = params;
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error);
  }, [error]);
  return (
    <div>
      <h2>Something went wrong!</h2>
      <button onClick={() => reset()}>Try again</button>
    </div>
  );
}
