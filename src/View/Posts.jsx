import { useEffect } from "react";
import { usePosts } from "../ViewModal/PostViewModal/userServices";

import Post from "./Post";

function Posts() {
  const { posts, fetchPosts } = usePosts();

  function handleDelete(id) {
    console.log(id);
  }

  useEffect(function () {
    fetchPosts();
  }, []);

  return (
    <div className="bg-slate-100 w-[1200px] mx-auto grid grid-cols-4 gap-4 my-4 r">
      {posts.map((post) => (
        <Post post={post} key={post.id} handleDelete={handleDelete} />
      ))}
    </div>
  );
}

export default Posts;
