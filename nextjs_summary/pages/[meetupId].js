import MeetupDetail from "@/components/meetups/meetupDetail";
import React from "react";
import { MongoClient } from "mongodb";
import Head from "next/head";

const MeetupDetailPage = (props) => {
  const { meetup } = props;
  return (
    <>
      <Head>
        <title>{meetup.title}</title>
        <meta name="description" content={meetup.description} />
      </Head>
      <MeetupDetail {...meetup} />
    </>
  );
};

export const getStaticPaths = async () => {
  const uri =
    "mongodb+srv://sjshank:QVdbY58upHb5NXWk@cluster0.bvzyivk.mongodb.net/meetups?retryWrites=true&w=majority&appName=Cluster0";
  const client = await MongoClient.connect(uri);
  const db = await client.db();

  const meetupCollec = await db.collection("meetups");
  const meetups = await meetupCollec.find({}, { meetupId: 1 }).toArray();

  const paths = meetups.map((meetup) => ({
    params: { meetupId: meetup.meetupId.toString() },
  }));
  client.close();

  return {
    paths: paths,
    fallback: true,
  };
};

export const getStaticProps = async (context) => {
  const { params } = context;
  const meetupId = params.meetupId;
  const uri =
    "mongodb+srv://sjshank:QVdbY58upHb5NXWk@cluster0.bvzyivk.mongodb.net/meetups?retryWrites=true&w=majority&appName=Cluster0";
  const client = await MongoClient.connect(uri);
  const db = await client.db();

  const meetupCollec = await db.collection("meetups");
  const meetupFound = await meetupCollec.findOne({
    meetupId: meetupId,
  });
  client.close();
  return {
    props: {
      meetup: {
        title: meetupFound.title,
        description: meetupFound.description,
        image: meetupFound.image,
        meetupId: meetupFound.meetupId,
        address: meetupFound.address,
      },
    },
    revalidate: 1,
  };
};

export default MeetupDetailPage;
