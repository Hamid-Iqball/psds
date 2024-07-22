import { postApi } from "../../Modal/post/post";

const postViewModal = (set, get) => ({
  posts: [],

  // Fetching Posts
  fetchPosts: async function () {
    const response = await postApi.getAll();
    const data = response.data;
    set({ posts: data });
  },

  // Sending Posts
  sendPosts: function (data) {
    console.log("data", data);
    set({ posts: [...new Set([...get().posts, data])] });
    // console.log(data);
  },

  // DeletingPost
  deletePost: async function (id) {
    try {
      await postApi.deletePost(id);
      set((state) => ({
        posts: state.posts.filter((post) => post.id !== id),
      }));
    } catch (error) {
      console.log(error);
    }
  },

  // UpdatingPost
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
      // set((state) => ({
      //   posts: state.posts.filter((post) =>
      //     post.id === id ? updatePost.data : post
      //   ),
      // }));
    } catch (error) {
      console.log(error);
    }
  },
});

export default postViewModal;
