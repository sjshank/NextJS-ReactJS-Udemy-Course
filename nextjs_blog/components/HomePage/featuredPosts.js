import React from "react";
import classes from "./featuredPosts.module.css";
import PostsGrid from "../Posts/postsGrid";

const FeaturedPosts = (props) => {
  return (
    <section className={classes.latest}>
      <h2>Featured Posts</h2>
      <PostsGrid posts={props.posts} />
    </section>
  );
};

export default FeaturedPosts;
