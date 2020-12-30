import React from "react";
import { useDispatch } from "react-redux";
import { getComments, postComment } from "../store/modules/comments";
import Form from "../components/Form";

function FormContainer() {
  const dispatch = useDispatch();
  const onCreate = (comment) => {
    console.log(">>>>>>>>FormContainer>>>>>>");
    console.log(comment);
    dispatch(postComment(comment));
    dispatch(getComments());
  };

  return <Form onPost={onCreate} />;
}

export default FormContainer;
