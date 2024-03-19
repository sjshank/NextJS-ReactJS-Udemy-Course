import AllPosts from "@/components/Posts/allPosts";
import { getAllPosts } from "@/lib/postUtils";
import Head from "next/head";

const AllPostsPage = (props) => {
  return (
    <>
      <Head>
        <title>UX Blog - All Posts</title>
        <meta
          name="description"
          content="List of all the post published by different authors"
        />
      </Head>
      <AllPosts posts={props.posts} />
    </>
  );
};

export const getStaticProps = async () => {
  const allPosts = await getAllPosts();

  return {
    props: {
      posts: allPosts,
    },
    revalidate: 600,
  };
};

export default AllPostsPage;
