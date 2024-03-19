import PostContent from "@/components/Posts/postDetail/postContent";
import { getAllPosts, getPostData } from "@/lib/postUtils";
import Head from "next/head";

const PostDetailPage = (props) => {
  return (
    <>
      <Head>
        <title>{props.postData.title}</title>
        <meta name="description" content={props.postData.excerpt} />
      </Head>
      <PostContent post={props.postData} />
    </>
  );
};

export const getStaticPaths = async () => {
  const allPosts = await getAllPosts();
  const paths = await allPosts.map((post) => ({ params: { id: post.id } }));
  return {
    paths: paths,
    fallback: false,
  };
};

export const getStaticProps = async (context) => {
  const { params } = await context;
  const data = await getPostData(params.id);
  return {
    props: {
      postData: data,
    },
  };
};

export default PostDetailPage;
