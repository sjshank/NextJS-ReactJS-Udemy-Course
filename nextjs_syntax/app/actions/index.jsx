"use server";

import { cookies } from 'next/headers'

import { revalidateTag, revalidatePath } from "next/cache";
import { redirect } from 'next/navigation'

export const getAllResource = async () => {
  try {
    const res = await fetch("https://reqres.in/api/unknown", {
      next: { tags: "resources" /*revalidate:0 ... no caching*/ },
      //cache:'force-cache' // default cache
      //cache:'no-store' // no caching
    });
    if (!res.ok) {
      // This will activate the closest `error.js` Error Boundary
      throw new Error("Failed to fetch data");
    }
    console.log("initial call");
    return res.json();
  } catch (e) {
    throw new Error("Failed to fetch data"); // this will be catch by nearest error boundary
  }
};

export const invalidateAction = async () => {
  revalidateTag("resources");
};

//POST method is also cached inside server actions
export const createUser = async (formData) => {

    cookies().set('name', 'Guddu') // we can utilize cookies, headers in server actions

  try {
    const res = await fetch("https://reqres.in/api/users", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: formData.get("name"),
        job: formData.get("job"),
      }),
    });
    if (!res.ok) {
      // This will activate the closest `error.js` Error Boundary
      throw new Error("Failed to post data");
    }
    const data = await res.json();
    if (data) {
      formData.set("name", "");
      formData.set("job", "");
    }
  } catch (e) {
    console.log(e);
//    throw new Error("Failed to post data"); // this will be catch by nearest error boundary
  }
   //revalidatePath('/resources'); //we can revalidate cache using path
   revalidateTag('resources');
   redirect("/dashboard") // we can redirect user from server actions
};
