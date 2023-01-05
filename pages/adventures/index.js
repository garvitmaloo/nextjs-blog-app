import React from "react";

import classes from "../layout.module.css";
import PostCard from "../../components/Posts/PostCard";
import { getAllCategoryPosts } from "../../helper/API/utilities";
import Head from "next/head";

const AllAdventures = ({ categoryPosts }) => {
  return (
    <>
      <Head>
        <title>Travel Blogs | Adventure Posts</title>
      </Head>
      <div>
        <h1 style={{ textAlign: "center", margin: "1.5em 0" }}>
          Showing All Adventures Posts
        </h1>
        <div className={classes["cards-container"]}>
          {categoryPosts.map((post) => (
            <PostCard key={post.postId} postData={post} />
          ))}
        </div>
      </div>
    </>
  );
};

export default AllAdventures;

export async function getStaticProps() {
  const result = await getAllCategoryPosts("adventure");
  return {
    props: {
      categoryPosts: result,
    },
  };
}
