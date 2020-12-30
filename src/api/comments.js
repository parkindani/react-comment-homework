import axios from "axios";

export const getComments = async () => {
  const response = await axios.get("http://localhost:4000/comments");
  return response.data;
};

export const getCommentsPage = async (page) => {
  const response = await axios.get(
    `http://localhost:4000/comments?_page=${page}&_limit=4&_order=desc&_sort=id`
  );
  return response.data;
};

export const getComment = async (id) => {
  const response = await axios.get(`http://localhost:4000/comments/${id}`);
  return response.data;
};

export const deleteComment = async (id) => {
  const response = await axios.delete(`http://localhost:4000/comments/${id}`);
  return response.data;
};

export const postComment = async (param) => {
  const response = await axios.post("http://localhost:4000/comments", param);
  return response.data;
};

export const putComment = async (param) => {
  const { id } = param;
  const response = await axios.put(
    `http://localhost:4000/comments/${id}`,
    param
  );
  return response.data;
};
