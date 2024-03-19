// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import { slugify } from "@/util";
import { MongoClient } from "mongodb";

export default async function handler(req, res) {
  if (req.method === "POST") {
    try {
      const meetup = req.body;
      meetup.meetupId = slugify(meetup.title);
      const uri =
        "mongodb+srv://sjshank:QVdbY58upHb5NXWk@cluster0.bvzyivk.mongodb.net/meetups?retryWrites=true&w=majority&appName=Cluster0";
      const client = await MongoClient.connect(uri);
      const db = await client.db();

      const meetupCollec = await db.collection("meetups");
      const result = await meetupCollec.insertOne(meetup);
      console.log(result);
      client.close();
      res.status(200).json({ message: "success", meetup: result });
    } catch (e) {
      res.status(500).json({ message: "error", meetup: null });
    }
  }
  res.status(200).json({ name: "John Doe" });
}
