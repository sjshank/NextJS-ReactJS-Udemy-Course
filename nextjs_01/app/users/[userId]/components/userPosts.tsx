import React from "react";

const UserPosts = async ({ userPostsPromise }: any) => {
  const posts = await userPostsPromise; // this will resolve promise object into response
  return (
    <div>
      <br />
      {posts &&
        posts.map((post: any) => {
          return (
            <div key={post.id} style={{padding:'20px', margin:'10px'}}>
              <p >{post.title}</p>
              <br />
              <br />
              <p>{post.body}</p>
              <hr/>
            </div>
          );
        })}
    </div>
  );
};

export default UserPosts;
