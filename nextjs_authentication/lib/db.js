import { MongoClient } from "mongodb";

export const connectToDatabase = async () => {
  const uri =
    "mongodb+srv://sjshank:QVdbY58upHb5NXWk@cluster0.bvzyivk.mongodb.net/auth?retryWrites=true&w=majority&appName=Cluster0";
  const client = await MongoClient.connect(uri);
  return client;
};
