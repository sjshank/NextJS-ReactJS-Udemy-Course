import { connectToDatabase } from "@/lib/db";
import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

const NextAuthOption = {
  session: {
    jwt: true,
  },
  providers: [
    CredentialsProvider({
      name: "Credentials",
      async authorize(credentials, req) {
        const client = await connectToDatabase();
        const db = await client.db();
        const userCollect = await db.collection("users");
        const user = await userCollect.findOne({ email: credentials.email });
        if (!user) {
          client.close();
          throw new Error("No user found.");
        }
        if (user.password !== credentials.password) {
          client.close();
          throw new Error("Incorrect email or password");
        }
        return { email: user.email };
      },
    }),
  ],
};

export default NextAuth(NextAuthOption);
