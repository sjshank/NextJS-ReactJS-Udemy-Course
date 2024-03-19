import { NextResponse } from "next/server";

export const GET = async (
  req: Request,
  { params }: { params: { id: string } }
) => {
  const id = params.id;
  console.log(id);
  const res = await fetch("https://jsonplaceholder.typicode.com/posts/"+id);

  const data = await res.json();

  return new NextResponse((JSON.stringify(data)), {
    headers:{
        'Access-Control-Allow-Origin':'https://jsonplaceholder.typicode.com',
        'Content-Type':'application/json'
    }
  });
};

export const PUT = async (
  req: Request,
  { params }: { params: { id: string } }
) => {
  const { title } = await req.json();
  const id = params.id;
  console.log(id);
  const res = await fetch("https://jsonplaceholder.typicode.com/posts/" + id, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      title,
    }),
  });

  const data = await res.json();

  return Response.json(data);
};
