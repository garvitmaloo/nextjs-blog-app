import React from "react";

import classes from "../layout.module.css";
import PostCard from "../../components/Posts/PostCard";
import { getAllCategoryPosts } from "../../helper/API/utilities";
import Head from "next/head";

const AllFoodPostsPage = ({ categoryPosts }) => {
  return (
    <>
      <Head>
        <title>Travel Blogs | Food Posts</title>
      </Head>
      <div>
        <h1 style={{ textAlign: "center", margin: "1.5em 0" }}>
          Showing All Food Posts
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

export default AllFoodPostsPage;

export async function getStaticProps() {
  const result = await getAllCategoryPosts("food");
  return {
    props: {
      categoryPosts: result,
    },
  };
}
