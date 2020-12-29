// import { call, put, takeEvery } from "redux-saga/effects";
import * as commentsApi from "../../api/comments";
import {
  createPromiseThunk,
  reducerUtils,
  handleAsyncActions,
  //   createPromiseThunkById,
  //   handleAsyncActionsById,
} from "../../lib/asyncUtils";

const GET_COMMENTS = "GET_COMMENTS";
const GET_COMMENTS_SUCCESS = "GET_COMMENTS_SUCCESS";
const GET_COMMENTS_ERROR = "GET_COMMENTS_ERROR";

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

export const initialState = { comments: reducerUtils.initial() };

export default function comments(state = initialState, action) {
  console.log(">>>>>>>>>>>>>>comments.js>>>>>comments>>>>>>>>>>>");
  console.log(state);
  console.log(action);
  switch (action.type) {
    case GET_COMMENTS:
    case GET_COMMENTS_SUCCESS:
    case GET_COMMENTS_ERROR:
      return handleAsyncActions(GET_COMMENTS, "comments", true)(state, action);
    default:
      console.log(">>>>>>>>>>>>default>>>>>>>>>>>>>");
      return state;
  }
}
