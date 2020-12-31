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
  const { data: page, loading: pageLoading, error: pageError } = useSelector(
    (state) => state.comments.page
  );
  const dispatch = useDispatch();
  const onCreate = (comment) => {
    if (comment.id) {
      dispatch(putComment(comment)).then(() => {
        dispatch(getCommentsPage(page.page));
      });
    } else {
      dispatch(postComment(comment)).then(() => {
        dispatch(getCommentsPage(1));
        dispatch(getComments());
      });
    }
  };

  if (loading && pageLoading && !data && !page) return <div>로딩중...</div>;
  if (error || pageError) return <div>에러 발생!</div>;
  if (data && page) return <Form onPost={onCreate} comment={data} />;

  return <Form onPost={onCreate} />;
}

export default FormContainer;
