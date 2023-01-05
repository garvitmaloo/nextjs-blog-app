import Image from "next/image";
import { useRouter } from "next/router";
import React from "react";

import classes from "./postcard.module.css";

const PostCard = ({ postData }) => {
  const router = useRouter();

  function postClickHandler() {
    router.push(`/posts/${postData.postId}`);
  }

  return (
    <div className={classes["post-card"]}>
      <Image
        src={postData.postBanner}
        alt={postData.postTitle}
        height={200}
        width={400}
      />

      <h3>{postData.postTitle}</h3>
      <button onClick={postClickHandler} className={classes["card-btn"]}>
        Read Full Post
      </button>
    </div>
  );
};

export default PostCard;
