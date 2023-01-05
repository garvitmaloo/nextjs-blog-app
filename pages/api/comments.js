import { fetchAllPosts } from "../../helper/API/utilities";

export default async function (req, res) {
  const { name, text, postId } = req.body;
  const submitUrl = `https://next-travel-blog-default-rtdb.firebaseio.com/posts/post${postId[1]}/comments.json`;

  await fetch(submitUrl, {
    method: "POST",
    body: JSON.stringify({ name, text }),
    headers: { "Content-Type": "application/json" },
  });

  const allPosts = await fetchAllPosts();
  const reqPost = allPosts.find((post) => post.postId === postId);

  return res.status(200).json({
    message: "Comment submitted successfully",
    comments: Object.values(reqPost.comments),
  });
}
