import { getAllResource, invalidateAction } from "@/app/actions";
import React, { Suspense } from "react";
import AddResource from "./components/AddResource";
import ResourceList from "./components/ResourceList";
import CreateUser from "./components/CreateUser";
import InputElement from "./components/InputElement";

const Resources = () => {
  // setTimeout(() => {
  //   invalidateAction(); // it will revalidate cache data using on-demand
  // }, 3000);

  //this function will be called as server action since it uses "use server"
  const createResource = async () => {
    "use server";
    const res = await fetch("https://reqres.in/api/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: "eve.holt@reqres.in",
        password: "pistol",
      }),
    });
    if (!res.ok) {
      // This will activate the closest `error.js` Error Boundary
      throw new Error("Failed to post data");
    }
    console.log(await res.json());
  };

  return (
    <>
      <div className="m-5">Resources</div>
      <br />
      <div className="p-5">
        <CreateUser>
          <InputElement name="name" label="Name" />
          <InputElement name="job" label="Job" />
        </CreateUser>
      </div>
      <div className="p-5">
        <AddResource createResource={createResource} />
      </div>
      <Suspense fallback={<p>Loading resources...</p>}>
        <ResourceList getAllResource={getAllResource} />
      </Suspense>
    </>
  );
};

export default Resources;

//It will make complete /resources segment cache free
// export const dynamic = 'force-dynamic'
