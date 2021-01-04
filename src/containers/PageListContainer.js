import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getComments } from "../store/modules/comments";
import PageList from "../components/PageList";
import { getCommentsPage } from "../store/modules/comments";

function PageListContainer() {
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

  const len = data.length;

  const onClick = (i) => {
    dispatch(getCommentsPage(i))
  };

  return <PageList length={len} onClick={onClick} />;
}

export default PageListContainer;
