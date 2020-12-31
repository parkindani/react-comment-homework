import React from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  getComments,
  getCommentsPage,
  postComment,
  putComment,
} from "../store/modules/comments";
import Form from "../components/Form";

function FormContainer() {
  const { data, loading, error } = useSelector(
    (state) => state.comments.modifyComment
  );
  console.log();
  const dispatch = useDispatch();
  const onCreate = (comment) => {
    if (comment.id) {
      dispatch(putComment(comment)).then(() => {
        dispatch(getComments());
      });
    } else {
      dispatch(postComment(comment)).then(() => {
        dispatch(getCommentsPage(1));
        dispatch(getComments());
      });
    }
  };

  if (loading && !data) return <div>로딩중...</div>;
  if (error) return <div>에러 발생!</div>;
  if (data) return <Form onPost={onCreate} comment={data} />;

  return <Form onPost={onCreate} />;
}

export default FormContainer;
