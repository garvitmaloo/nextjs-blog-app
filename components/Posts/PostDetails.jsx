import Image from "next/image";
import React, { useState } from "react";

import CommentsForm from "../CommentsForm/CommentsForm";
import classes from "./post-details.module.css";

function dateFormatter(date) {
  const splitArray = date.split("-");

  const conversionObject = {
    1: "January",
    2: "February",
    3: "March",
    4: "April",
    5: "May",
    6: "June",
    7: "July",
    8: "August",
    9: "September",
    10: "October",
    11: "November",
    12: "December",
  };

  let monthText = "";

  for (let [key, value] of Object.entries(conversionObject)) {
    if (key === splitArray[1]) {
      monthText = value;
    }
  }

  return `${splitArray[0]} ${monthText} ${splitArray[2]}`;
}

const PostDetails = ({ details }) => {
  const [displayForm, setDisplayForm] = useState(false);
  const [commentsArray, setCommentsArray] = useState(() =>
    details.comments ? Object.values(details.comments) : []
  );

  function toggleCommentsForm(comments) {
    setDisplayForm((previousValue) => !previousValue);

    if (comments !== null) {
      setCommentsArray(comments);
    }
  }

  const dateText = dateFormatter(details.dateOfPosting);

  return (
    <div className={classes["details-container"]}>
      <Image
        priority={true}
        src={details.postBanner}
        alt={details.postTitle}
        height={500}
        width={1600}
      />

      <h2>{details.postTitle}</h2>
      <time>Date Of Posting - {dateText}</time>
      <p>{details.postDesc}</p>

      <div className={classes.comments}>
        <div className={classes.top}>
          <h3>Comments</h3>
          <button onClick={() => toggleCommentsForm(null)}>
            <i className="fa-solid fa-circle-plus"></i> Add New Comment
          </button>
        </div>

        {displayForm && <CommentsForm toggleFormDisplay={toggleCommentsForm} />}

        {commentsArray && commentsArray.length === 0 ? (
          <p style={{ marginTop: "1em" }}>No Comments to show</p>
        ) : (
          commentsArray &&
          commentsArray.map((comment) => (
            <div key={comment.text} className={classes["comments-card"]}>
              <p>{comment.text}</p>
              <p className={classes.name}>By - {comment.name}</p>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default PostDetails;
