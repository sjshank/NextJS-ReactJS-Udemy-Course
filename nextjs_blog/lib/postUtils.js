import fs from "fs";
import path from "path";
import * as matter from "gray-matter";

const postsDir = path.join(process.cwd(), "data", "posts");

export const getPostData = (fileName) => {
  const postId = fileName.replace(/\.md$/, "");
  const filePath = path.join(postsDir, `${postId}.md`);
  const fileContent = fs.readFileSync(filePath, "utf-8");
  const { data, content } = matter(fileContent);

  return {
    id: postId,
    ...data,
    content: content,
  };
};

export const getAllPosts = () => {
  const postFiles = fs.readdirSync(postsDir);
  return postFiles.map((postFile) => getPostData(postFile));
};

export const getFeaturedPosts = () => {
  const allPosts = getAllPosts();
  return allPosts.filter((post) => post.isFeatured);
};
