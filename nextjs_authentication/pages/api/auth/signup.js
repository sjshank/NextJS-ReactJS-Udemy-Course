import { connectToDatabase } from "@/lib/db";

export default async function handler(req, res) {
  if (req.method === "POST") {
    const { email, password } = req.body;
    if (!email || !password) {
      res.status(422).json({ status: "error", message: "Invalid input" });
      return;
    }
    const client = await connectToDatabase();
    const db = client.db();
    const userCollect = await db.collection("users");
    const result = await userCollect.insertOne({ email, password }); // We should always store encrypted password in db
    console.log(result);
    client.close();
    res
      .status(200)
      .json({ status: "success", message: "User created", user: result });
  }
}
