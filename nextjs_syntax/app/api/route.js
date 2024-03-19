import { NextResponse } from "next/server";
import { cookies } from "next/headers";
import { headers } from "next/headers";


//GET method is by default cached
export async function GET(request ) {
  //we can read & manipulate cookies/headers
  //console.log(request.cookies);
  const headersList = headers();
  // console.log(headersList.get("api-call")); // this was set inside UserList component

  const res = await fetch("https://reqres.in/api/users", {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
    next: { revalidate: 10 },
  });
  const data = await res.json();
  console.log(data);
  return Response.json(data);
}

export async function POST(request) {
  const reqBody = await request.json();
  const res = await fetch("https://reqres.in/api/users", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(reqBody),
  });
  const data = await res.json();
  return Response.json(data);
}
