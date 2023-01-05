import React from "react";

import classes from "../layout.module.css";
import PostCard from "../../components/Posts/PostCard";
import { getAllCategoryPosts } from "../../helper/API/utilities";
import Head from "next/head";

const AllCulturePostsPage = ({ categoryPosts }) => {
  return (
    <>
      <Head>
        <title>Travel Blogs | Culture Posts</title>
      </Head>
      <div>
        <h1 style={{ textAlign: "center", margin: "1em 0" }}>
          Showing All Culture Posts
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

export default AllCulturePostsPage;

export async function getStaticProps() {
  const result = await getAllCategoryPosts("culture");
  return {
    props: {
      categoryPosts: result,
    },
  };
}
