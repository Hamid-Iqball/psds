import useStore from "../ViewModal/Store/store";

const updateData = {
  title: "Hamid Iqbal",
  body: "Hereeeee",
};
function Post({ post }) {
  const { deletePost, updatePost } = useStore();
  // console.log(post);
  return (
    <div className="flex justify-center items-center flex-col p-4 border-2 border-slate-700 rounded-lg">
      <h1 className="text-lg font-semibold">{post.title}</h1>
      <p>{post.body}</p>

      <div className="flex space-x-2 items-center mt-auto mb-[-4px]">
        <button
          className="bg-slate-500 text-slate-50 p-2 font-bold border-2 mt-2 rounded-xl"
          onClick={() => deletePost(post.id)}
        >
          Delete
        </button>
        <button
          className="bg-slate-500 text-slate-50 p-2 font-bold border-2 mt-2 rounded-xl"
          onClick={() => updatePost(post.id, updateData)}
        >
          Update
        </button>
      </div>
    </div>
  );
}

export default Post;
