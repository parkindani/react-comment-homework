// import { call, put, takeEvery } from "redux-saga/effects";
import * as commentsApi from "../../api/comments";
import {
  createPromiseThunk,
  reducerUtils,
  handleAsyncActions,
  createPromiseThunkById,
} from "../../lib/asyncUtils";

const GET_COMMENTS = "GET_COMMENTS";
const GET_COMMENTS_SUCCESS = "GET_COMMENTS_SUCCESS";
const GET_COMMENTS_ERROR = "GET_COMMENTS_ERROR";

const GET_COMMENTS_PAGE = "GET_COMMENTS_PAGE";
const GET_COMMENTS_PAGE_SUCCESS = "GET_COMMENTS_PAGE_SUCCESS";
const GET_COMMENTS_PAGE_ERROR = "GET_COMMENTS_PAGE_ERROR";

const DELETE_COMMENT = "DELETE_COMMENT";
const DELETE_COMMENT_SUCCESS = "DELETE_COMMENT_SUCCESS";
const DELETE_COMMENT_ERROR = "DELETE_COMMENT_ERROR";

const POST_COMMENT = "POST_COMMENT";
const POST_COMMENT_SUCCESS = "POST_COMMENT_SUCCESS";
const POST_COMMENT_ERROR = "POST_COMMENT_ERROR";

const SET_COMMENT = "SET_COMMENT";
const SET_COMMENT_SUCCESS = "SET_COMMENT_SUCCESS";
const SET_COMMENT_ERROR = "SET_COMMENT_ERROR";

const PUT_COMMENT = "PUT_COMMENT";
// const PUT_COMMENT_SUCCESS = "PUT_COMMENT_SUCCESS";
// const PUT_COMMENT_ERROR = "PUT_COMMENT_ERROR";

export const getComments = createPromiseThunk(
  GET_COMMENTS,
  commentsApi.getComments
);

export const getCommentsPage = createPromiseThunkById(
  GET_COMMENTS_PAGE,
  commentsApi.getCommentsPage
);

export const deleteComment = createPromiseThunkById(
  DELETE_COMMENT,
  commentsApi.deleteComment
);

export const postComment = createPromiseThunk(
  POST_COMMENT,
  commentsApi.postComment
);

export const setComment = createPromiseThunkById(
  SET_COMMENT,
  commentsApi.getComment
);

export const putComment = createPromiseThunkById(
  PUT_COMMENT,
  commentsApi.putComment
);

export const initialState = {
  comments: reducerUtils.initial(),
  modifyComment: reducerUtils.initial(),
  page: reducerUtils.initial(),
};

export default function comments(state = initialState, action) {
  switch (action.type) {
    case GET_COMMENTS:
    case GET_COMMENTS_SUCCESS:
    case GET_COMMENTS_ERROR:
      return handleAsyncActions(GET_COMMENTS, "comments", true)(state, action);
    case GET_COMMENTS_PAGE:
    case GET_COMMENTS_PAGE_SUCCESS:
    case GET_COMMENTS_PAGE_ERROR:
      return handleAsyncActions(GET_COMMENTS_PAGE, "page", true)(state, action);
    case POST_COMMENT:
    case POST_COMMENT_SUCCESS:
    case POST_COMMENT_ERROR:
      return handleAsyncActions(POST_COMMENT, "comments", true)(state, action);
    case DELETE_COMMENT:
    case DELETE_COMMENT_SUCCESS:
    case DELETE_COMMENT_ERROR:
      return handleAsyncActions(
        DELETE_COMMENT,
        "comments",
        true
      )(state, action);
    case SET_COMMENT:
    case SET_COMMENT_SUCCESS:
    case SET_COMMENT_ERROR:
      return handleAsyncActions(SET_COMMENT, "modifyComment")(state, action);
    default: {
      return state;
    }
  }
}
