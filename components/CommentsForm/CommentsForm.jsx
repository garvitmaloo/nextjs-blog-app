import { useRouter } from "next/router";
import React, { useRef } from "react";

import classes from "./comments-form.module.css";

const CommentsForm = ({ toggleFormDisplay }) => {
  const router = useRouter();
  const postId = router.query.postId;

  const nameInputRef = useRef();
  const textInputRef = useRef();

  async function commentSubmitHandler(e) {
    e.preventDefault();

    const name = nameInputRef.current.value;
    const text = textInputRef.current.value;

    const response = await fetch("/api/comments", {
      method: "POST",
      body: JSON.stringify({ name, text, postId }),
      headers: { "Content-Type": "application/json" },
    });
    const { comments } = await response.json();

    toggleFormDisplay(comments);
  }

  return (
    <div className={classes["comments-form"]}>
      <h3>Submit a comment</h3>
      <form onSubmit={commentSubmitHandler} className={classes.form}>
        <div>
          <label htmlFor="name">Name</label>
          <input
            required
            ref={nameInputRef}
            type="text"
            name="name"
            id="name"
          />
        </div>
        <div>
          <label htmlFor="text">Comment Text</label>
          <textarea
            ref={textInputRef}
            name="text"
            required
            id="text"
            cols="30"
            rows="10"
          ></textarea>
        </div>

        <button>Submit Comment</button>
      </form>
    </div>
  );
};

export default CommentsForm;
