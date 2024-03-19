export const POST = async (req: Request) => {
  const { title, body, userId } = await req.json();
  const res = await fetch("https://jsonplaceholder.typicode.com/posts", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      title,
      body,
      userId,
    }),
  });

  const data = await res.json();

  return Response.json(data);
};

export const PUT = async (req: Request) => {
  const { id, title } = await req.json();
  console.log(id);
  const res = await fetch("https://jsonplaceholder.typicode.com/posts/" + id, {
    method: "PATCH",
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
