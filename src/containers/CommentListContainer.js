import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import CommentList from "../components/CommentList";
import { getComments } from "../store/modules/comments";

function CommentListContainer() {
  const { data, loading, error } = useSelector(
    (state) => state.comments.comments
  );
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getComments());
  }, [dispatch]);

  if (loading && !data) return <div>로딩중...</div>;
  if (error) return <div>에러 발생!</div>;
  if (!data) return null;

  return <CommentList comments={data} />;
}

export default CommentListContainer;
