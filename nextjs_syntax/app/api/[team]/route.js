//optional parameter "context" to read dynamic params
export async function GET(request, context) {
  const { params } = context;
  console.log("team api handler -", params);

  return Response.json({ message: true });
}
