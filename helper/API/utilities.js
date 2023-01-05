export const fetchAllPosts = async function () {
  const result = await fetch(process.env.posts_url);
  const data = await result.json();

  return Object.values(data);
};

export const getMostPopularReads = async function () {
  const postsData = await fetchAllPosts();
  const mostPopularPosts = postsData.filter(
    (post) => post.mostPopular === true
  );

  return mostPopularPosts;
};

export const getAllCategoryPosts = async function (category) {
  const allPosts = await fetchAllPosts();
  const categoryPosts = allPosts.filter((post) => post.category === category);

  return categoryPosts;
};

export const fetchPostDetails = async function (postId) {
  const allPosts = await fetchAllPosts();
  const reqPost = allPosts.find((post) => post.postId === postId);

  return reqPost;
};

export const getAllUsers = async function () {
  const response = await fetch(process.env.users_url);
  const data = await response.json();

  const allUsers = data ? Object.values(data) : [];

  return allUsers;
};
