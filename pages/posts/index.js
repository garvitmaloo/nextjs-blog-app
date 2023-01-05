import React from "react";
import Head from "next/head";

import classes from "../layout.module.css";
import PostCard from "../../components/Posts/PostCard";
import { fetchAllPosts } from "../../helper/API/utilities";

const AllPostsPage = ({ allPosts }) => {
  return (
    <>
      <Head>
        <title>Travel Blogs | All Posts</title>
      </Head>

      <div>
        <h1 style={{ textAlign: "center", margin: "1.5em 0" }}>
          Showing All Posts
        </h1>
        <div className={classes["cards-container"]}>
          {allPosts.map((post) => (
            <PostCard key={post.postId} postData={post} />
          ))}
        </div>
      </div>
    </>
  );
};

export default AllPostsPage;

export async function getStaticProps() {
  const allPosts = await fetchAllPosts();

  return {
    props: {
      allPosts: allPosts,
    },
  };
}
