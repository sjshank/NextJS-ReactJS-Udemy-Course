import React, { Suspense } from "react";
import getUserDetails from "../../../lib/getUserDetails";
import getUserPosts from "../../../lib/getUserPosts";
import UserPosts from "./components/userPosts";
import type { Metadata } from "next";
import getAllUsers from "@/lib/getAllUsers";
import {notFound} from "next/navigation";

export const generateMetadata = async ({ params }: any) => {
  const userData: Promise<any> = getUserDetails(params?.userId);
  const userDetails = await userData;
  return {
    title: userDetails.name,
  };
};

const UserPage = async ({ params }: any) => {
  const userDetails = getUserDetails(params?.userId);
  const posts = getUserPosts(params.userId); //this will return promise object
  const user = await userDetails;
  if(!user.name) return notFound(); // It will execute not found page for non-existing user & it's post
  return (
    <div>
      <h2>{user.name}</h2>
      <br />
      <Suspense fallback={<p>Loading....</p>}>
        <UserPosts userPostsPromise={posts} />
      </Suspense>
    </div>
  );
};

export default UserPage;

//this will help next js to prefetch post data for all the userid
//Hence converting SSR into SSG 
export const generateStaticParams = async () => {
  const usersData = await getAllUsers();
  const finalParams = usersData.map((user: any) => {
    userId: user.id;
  });
  return finalParams;
};
