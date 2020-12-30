import React from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  getComments,
  postComment,
  putComment,
} from "../store/modules/comments";
import Form from "../components/Form";

function FormContainer() {
  const { data, loading, error } = useSelector(
    (state) => state.comments.modifyComment
  );
  const dispatch = useDispatch();
  const onCreate = (comment) => {
    if (comment.id) {
      dispatch(putComment(comment));
    } else {
      dispatch(postComment(comment));
    }
    dispatch(getComments());
  };

  if (loading && !data) return <div>로딩중...</div>;
  if (error) return <div>에러 발생!</div>;
  if (data) return <Form onPost={onCreate} comment={data} />;

  return <Form onPost={onCreate} />;
}

export default FormContainer;
