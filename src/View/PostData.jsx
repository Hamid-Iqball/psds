import { useState } from "react";
import { postApi } from "../Modal/post/post";
// import useStore from "../ViewModal/Store/store";
import { usePosts } from "../ViewModal/PostViewModal/userServices";

const data = { title: "", body: "" };
function PostData() {
  const [inputData, setInputData] = useState(data);
  const { sendPosts } = usePosts();

  function handleData(e) {
    setInputData({ ...inputData, [e.target.name]: e.target.value });
  }

  // Always do this api handling in try and catch block to handle errors
  async function handleSubmit(e) {
    e.preventDefault();
    try {
      const response = await postApi.sendPost(inputData);
      if (response.status === 201) {
        console.log("response", response);
        sendPosts(response.data);
      }
    } catch (error) {}
    // console.log(inputData);
  }
  return (
    <form
      className="flex justify-betweet flex-col items-center space-y-3 "
      onSubmit={handleSubmit}
    >
      <div className="p-2">
        <label htmlFor="title">Title:</label>
        <input
          type="text"
          className="p-2"
          name="title"
          value={inputData.title}
          onChange={handleData}
        />
      </div>
      <div>
        <label htmlFor="body">Body:</label>
        <input
          type="text"
          className="p-2"
          name="body"
          value={inputData.body}
          onChange={handleData}
        />
      </div>
      <button className="bg-slate-400 p-2 rounded-xl" type="submit">
        Submit
      </button>
    </form>
  );
}
export default PostData;
