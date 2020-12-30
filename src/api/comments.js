import axios from "axios";

export const getComments = async () => {
  const response = await axios.get("http://localhost:4000/comments");
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

// todo: post, put, delete, get lazy
