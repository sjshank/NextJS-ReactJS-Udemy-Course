import FeaturedPosts from "@/components/HomePage/featuredPosts";
import Hero from "@/components/HomePage/hero";
import { getFeaturedPosts } from "@/lib/postUtils";
import { Fragment } from "react";
import Head from "next/head";

const HomePage = (props) => {
  return (
    <Fragment>
      <Head>
        <title>UX Blog - Featured Posts</title>
        <meta
          name="description"
          content="All the featured posts published by me on UX"
        />
      </Head>
      <Hero />
      <FeaturedPosts posts={props.posts} />
    </Fragment>
  );
};

export const getStaticProps = async () => {
  const featuredPosts = await getFeaturedPosts();

  return {
    props: {
      posts: featuredPosts,
    },
    revalidate: 600,
  };
};

export default HomePage;
