import React from "react";

import PostDetails from "../../components/Posts/PostDetails";
import Spinner from "../../components/Spinner/Spinner";
import { fetchPostDetails } from "../../helper/API/utilities";

const PostDetailsPage = ({ details }) => {
  if (!details) {
    return <Spinner />;
  }

  return <PostDetails details={details} />;
};

export default PostDetailsPage;

export async function getServerSideProps(context) {
  const reqPost = await fetchPostDetails(context.params.postId);

  return {
    props: { details: reqPost },
  };
}
