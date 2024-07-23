import { postApi } from "../../Modal/post/post";

const postViewModal = (set, get) => ({
  posts: [],

  fetchPosts: async function () {
    const response = await postApi.getAll();
    const data = response.data;
    set({ posts: data });
  },

  // Send Post
  sendPosts: function (data) {
    console.log("data", data);
    set({ posts: [...new Set([...get().posts, data])] });
  },

  // Delete Post
  deletePost: async function (id) {
    try {
      await postApi.deletePost(id);
      set({
        posts: get().posts.filter((post) => post.id !== id),
      });
    } catch (error) {
      console.log(error);
    }
  },

  // Update Post
  updatePost: async function (id, updateData) {
    console.log("id", id);
    try {
      const updatePost = await postApi.updatePost(id, updateData);
      if (updatePost.status === 200) {
        set({
          posts: get().posts.map((ele) =>
            ele.id === id ? updatePost.data : ele
          ),
        });
      }
      console.log(get().posts);
    } catch (error) {
      console.log(error);
    }
  },
});

export default postViewModal;
