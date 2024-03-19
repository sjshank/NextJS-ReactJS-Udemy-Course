import React from "react";
import PostHeader from "./postHeader";
import classes from "./postContent.module.css";
import ReactMarkdown from "react-markdown";

const PostContent = (props) => {
  const post = props.post;
  return (
    <section className={classes.content}>
      <PostHeader title={post.title} image={post.image} id={post.id} />
      <ReactMarkdown>{post.content}</ReactMarkdown>
    </section>
  );
};

export default PostContent;
