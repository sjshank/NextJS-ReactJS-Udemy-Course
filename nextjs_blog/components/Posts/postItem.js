import React from "react";
import classes from "./postItem.module.css";
import Link from "next/link";
import Image from "next/image";

const PostItem = ({ post }) => {
  const { title, image, date, excerpt, id } = post;
  const imgUrl = `/images/posts/${id}/${image}`;
  return (
    <li className={classes.post}>
      <Link href={`/posts/${id}`}>
        <div className={classes.image}>
          <Image
            src={imgUrl}
            alt={title}
            layout="responsive"
            width={0}
            height={200}
          />
        </div>
        <div className={classes.content}>
          <h3>{title}</h3>
          <time>{date}</time>
          <p>{excerpt}</p>
        </div>
      </Link>
    </li>
  );
};

export default PostItem;
