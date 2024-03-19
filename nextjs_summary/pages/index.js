import MeetupList from "@/components/meetups/meetupList";
import React from "react";

import { MongoClient } from "mongodb";
const HomePage = ({ meetups }) => {
  return <MeetupList meetups={meetups} />;
};

export const getStaticProps = async (context) => {
  const uri =
    "mongodb+srv://sjshank:QVdbY58upHb5NXWk@cluster0.bvzyivk.mongodb.net/meetups?retryWrites=true&w=majority&appName=Cluster0";
  const client = await MongoClient.connect(uri);
  const db = await client.db();

  const meetupCollec = await db.collection("meetups");
  const result = await meetupCollec.find().toArray();
  client.close();
  return {
    props: {
      meetups: result.map((res) => ({
        title: res.title,
        description: res.description,
        image: res.image,
        meetupId: res.meetupId,
      })),
    },
    revalidate: 1,
  };
};

export default HomePage;
