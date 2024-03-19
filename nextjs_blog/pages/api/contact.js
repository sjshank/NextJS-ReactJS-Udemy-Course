import { MongoClient } from "mongodb";

export default async function handler(req, res) {
  if (req.method === "POST") {
    const { email, name, message } = req.body;

    if (!email || !name || !message) {
      res.status(422).json({ message: "Invalid input entered." });
      return;
    }
    try {
      const uri = `mongodb+srv://${process.env.MONGODB_USER}:${process.env.MONGODB_PASS}@${process.env.MONGODB_CLUSTER}/contact?retryWrites=true&w=majority&appName=Cluster0`;
      const client = await MongoClient.connect(uri);
      const db = await client.db();
      const contactFormCollec = await db.collection("contactForm");
      const result = await contactFormCollec.insertOne({
        email,
        name,
        message,
      });
      client.close();
      res.status(200).json({ status: "success", contact: result });
    } catch (err) {
      res
        .status(500)
        .json({ status: "error", message: "Something went wrong." });
    }
  } else {
    res.status(200).json({ name: "John Doe" });
  }
}
