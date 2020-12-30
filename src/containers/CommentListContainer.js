import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import CommentList from "../components/CommentList";
import { getComments, getCommentsPage, deleteComment, setComment } from "../store/modules/comments";

function CommentListContainer() {
  const { data, loading, error } = useSelector(
    (state) => state.comments.page
  );
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCommentsPage(1));
  }, [dispatch]);

  if (loading && !data) return <div>로딩중...</div>;
  if (error) return <div>에러 발생!</div>;
  if (!data) return null;

  const onDelete = (id) => {
    dispatch(deleteComment(id));
    dispatch(getCommentsPage(1));
    dispatch(getComments());
  };

  const onModify = (id) => {
    console.log(">>>>>>>>CommentListContainer>>>>>onModify>>>>>>>");
    console.log(id);
    dispatch(setComment(id))
  };

  return (
    <CommentList comments={data} onDelete={onDelete} onModify={onModify} />
  );
}

export default CommentListContainer;
