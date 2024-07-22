import useStore from "../Store/store";

export const usePosts = () => {
  const posts = useStore((state) => state.posts);
  const fetchPosts = useStore((state) => state.fetchPosts);
  const sendPosts = useStore((state) => state.sendPosts);
  const deletePost = useStore((state) => state.deletePost);
  const updatePost = useStore((state) => state.updatePost);
  return { posts, fetchPosts, sendPosts, deletePost, updatePost };
};
