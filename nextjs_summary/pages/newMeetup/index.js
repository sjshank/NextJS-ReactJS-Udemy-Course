import NewMeetupForm from "@/components/meetups/newMeetupForm";
import React from "react";
import { useRouter } from "next/router";
import Head from "next/head";

const NewMeetupPage = () => {
  const router = useRouter();
  const addNewMeetup = (enteredData) => {
    fetch("/api/newMeetup", {
      method: "POST",
      body: JSON.stringify(enteredData),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        if (data.message === "success") {
          router.push("/");
        }
      })
      .catch((err) => {
        console.error(err);
      });
  };
  return (
    <>
      <Head>
        <title>Add New Meetup</title>
        <meta name="description" content="New new meetup details here" />
      </Head>
      <NewMeetupForm onAddMeetup={addNewMeetup} />
    </>
  );
};

export default NewMeetupPage;
