// import { call, put, takeEvery } from "redux-saga/effects";
import * as commentsApi from "../../api/comments";
import {
  createPromiseThunk,
  reducerUtils,
  handleAsyncActions,
  createPromiseThunkById,
  handleAsyncActionsById,
} from "../../lib/asyncUtils";

const GET_COMMENTS = "GET_COMMENTS";
const GET_COMMENTS_SUCCESS = "GET_COMMENTS_SUCCESS";
const GET_COMMENTS_ERROR = "GET_COMMENTS_ERROR";

const DELETE_COMMENT = "DELETE_COMMENT";
const DELETE_COMMENT_SUCCESS = "DELETE_COMMENT_SUCCESS";
const DELETE_COMMENT_ERROR = "DELETE_COMMENT_ERROR";

const POST_COMMENT = "POST_COMMENT";
const POST_COMMENT_SUCCESS = "POST_COMMENT_SUCCESS";
const POST_COMMENT_ERROR = "POST_COMMENT_ERROR";

const SET_COMMENT = "SET_COMMENT";
const SET_COMMENT_SUCCESS = "SET_COMMENT_SUCCESS";
const SET_COMMENT_ERROR = "SET_COMMENT_ERROR";

const GET_COMMENT = "GET_COMMENT";
const GET_COMMENT_SUCCESS = "GET_COMMENT_SUCCESS";
const GET_COMMENT_ERROR = "GET_COMMENT_ERROR";

// const GET_COMMENT = "GET_COMMENT";
// const GET_COMMENT_SUCCESS = "GET_COMMENT_SUCCESS";
// const GET_COMMENT_ERROR = "GET_COMMENT_ERROR";

// export const getComments = () => ({ type: GET_COMMENTS });
// export const getComment = (id) => ({
//   type: GET_COMMENT,
//   payload: id,
//   meta: id,
// });

// function* getCommentsSaga() {
//   try {
//     const comments = yield call(commentsApi.getComments);
//     yield put({
//       type: GET_COMMENTS_SUCCESS,
//       payload: comments,
//     });
//   } catch (e) {
//     yield put({
//       type: GET_COMMENTS_ERROR,
//       payload: e,
//       error: true,
//     });
//   }
// }

export const getComments = createPromiseThunk(
  GET_COMMENTS,
  commentsApi.getComments
);

export const deleteComment = createPromiseThunkById(
  DELETE_COMMENT,
  commentsApi.deleteComment
);

export const postComment = createPromiseThunkById(
  POST_COMMENT,
  commentsApi.postComment
);

export const setComment = createPromiseThunkById(
  SET_COMMENT,
  commentsApi.getComment
);

export const initialState = { comments: reducerUtils.initial(), modifyComment: reducerUtils.initial() };

export default function comments(state = initialState, action) {
  switch (action.type) {
    case GET_COMMENTS:
    case GET_COMMENTS_SUCCESS:
    case GET_COMMENTS_ERROR:
      return handleAsyncActions(GET_COMMENTS, "comments", true)(state, action);
    case DELETE_COMMENT:
    case DELETE_COMMENT_SUCCESS:
    case DELETE_COMMENT_ERROR:
      return handleAsyncActionsById(
        DELETE_COMMENT,
        "comments",
        true
      )(state, action);
    case SET_COMMENT:
    case SET_COMMENT_SUCCESS:
    case SET_COMMENT_ERROR:
      return handleAsyncActions(
        SET_COMMENT,
        "modifyComment",
      )(state, action);
    default:
      return state;
  }
}
