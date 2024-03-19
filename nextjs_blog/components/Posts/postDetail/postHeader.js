import React from "react";
import Image from "next/image";
import classes from "./postHeader.module.css";

const PostHeader = ({ title, image, id }) => {
  const imgUrl = `/images/posts/${id}/${image}`;
  return (
    <header className={classes.header}>
      <h1>{title}</h1>
      <Image src={imgUrl} alt={title} width={200} height={200} />
    </header>
  );
};

export default PostHeader;
