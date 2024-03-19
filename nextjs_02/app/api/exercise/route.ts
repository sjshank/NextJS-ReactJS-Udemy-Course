export const GET = async (request: Request) => {
  const { searchParams } = new URL(request.url);
  const name = searchParams.get("name");
  const res = await fetch(
    `https://exercisedb.p.rapidapi.com/exercises/name/${name}`,
    {
      headers: {
        "X-RapidAPI-Key": process.env.X_RapidAPI_Key!,
      },
    }
  );
  const exercises: Partial<Exercise[]> = await res.json();

  return Response.json({ exercises });
};
