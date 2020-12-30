import React, { useState } from "react";
import styled from "styled-components";

const FormStyle = styled.div`
  & > form {
    padding: 0 10px;
    margin-bottom: 50px;
  }

  & > form > textarea {
    padding: 5px 1%;
    width: 98%;
    height: 50px;
  }

  & > form > input[type="text"] {
    padding: 5px 1%;
    width: 98%;
    margin-bottom: 10px;
  }

  & > form > button {
    padding: 0.375rem 0.75rem;
    border-radius: 0.25rem;
    border: 1px solid lightgray;
    cursor: pointer;
  }
`;

const initialState = {
  profile_url: "",
  author: "",
  content: "",
  createdAt: "",
};

function Form() {
  const [state, setState] = useState(initialState);

  const onChange = (e) => {
    const key = e.target.name;
    const value = e.target.value;
    setState({ ...state, [key]: value });
  };

  const onCreate = (e) => {
    e.preventDefault();
    console.log(">>>>>>>>>>>>>>>Form>>>>onCreate>>>>");
    console.log(state);
    setState(initialState);
  };

  return (
    <FormStyle>
      <form onSubmit={onCreate}>
        <input
          type="text"
          name="profile_url"
          placeholder="https://picsum.photos/id/1/50/50"
          value={state.profile_url}
          onChange={(e) => {
            onChange(e);
          }}
          required
        />
        <br />
        <input
          type="text"
          name="author"
          placeholder="작성자"
          value={state.author}
          onChange={(e) => {
            onChange(e);
          }}
        />
        <br />
        <textarea
          name="content"
          placeholder="내용"
          value={state.content}
          required
          onChange={(e) => {
            onChange(e);
          }}
        ></textarea>
        <br />
        <input
          type="text"
          name="createdAt"
          placeholder="2020-05-30"
          value={state.createdAt}
          onChange={(e) => {
            onChange(e);
          }}
          required
        />
        <br />
        <button type="submit">등록</button>
      </form>
    </FormStyle>
  );
}

export default Form;
