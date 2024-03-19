"use client";

//This will catch all the errors if there's no error.js file present in hierarchy.
//It will even catch errors from root layout & template files
export default function GlobalError({ params }) {
  const { error, reset } = params;
  return (
    <html>
      <body>
        <h2>Error ! Caught at global level</h2>
        <button onClick={() => reset()}>Try again</button>
      </body>
    </html>
  );
}
