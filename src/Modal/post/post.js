import { axiosInstance } from "../utilities/AxiosInstance";

export const postApi = {
  getAll: function () {
    return axiosInstance.request({
      method: "GET",
      url: `/posts`,
    });
  },
  sendPost: function (data) {
    return axiosInstance.request({
      method: "POST",
      url: `/posts`,
      data: data,
    });
  },

  deletePost: function (id) {
    return axiosInstance.request({
      method: "DELETE",
      url: "/posts/1",
      id: id,
    });
  },
  updatePost: function (id, updateData) {
    return axiosInstance.request({
      method: "PATCH",
      url: `/Posts/${id}`,
      data: updateData,
    });
  },
};
