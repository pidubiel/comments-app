import {
  FETCH_COMMENTS_REQUEST,
  FETCH_COMMENTS_SUCCESS,
  FETCH_COMMENTS_FAILURE,
  MARK_COMMENT_AS_FAV,
  CREATE_NEW_COMMENT,
  REMOVE_COMMENT_FROM_FAV
} from './commentTypes';
import axios from 'axios';

const URL = 'https://jsonplaceholder.typicode.com/comments';

export const fetchCommentsRequest = () => {
  return {
    type: FETCH_COMMENTS_REQUEST
  };
};

export const fetchCommentsSuccess = comments => {
  return {
    type: FETCH_COMMENTS_SUCCESS,
    payload: comments
  };
};

export const fetchCommentsFailure = error => {
  return {
    type: FETCH_COMMENTS_FAILURE,
    payload: error
  };
};

export const addToFav = comment => {
  return {
    type: MARK_COMMENT_AS_FAV,
    payload: comment
  };
};

export const removeFromFav = comment => {
  return {
    type: REMOVE_COMMENT_FROM_FAV,
    payload: comment
  };
};

export const createNewComment = comment => {
  return {
    type: CREATE_NEW_COMMENT,
    payload: comment
  };
};

export const fetchComments = () => {
  return dispatch => {
    dispatch(fetchCommentsRequest);
    axios
      .get(URL)
      .then(res => {
        const comments = res.data
          .filter(element => element.id <= 20)
          .map(el => {
            return {
              title: el.name,
              email: el.email,
              body: el.body,
              id: el.id,
              isFav: false
            };
          });
        dispatch(fetchCommentsSuccess(comments));
      })
      .catch(error => {
        const errorMsg = error.message;
        dispatch(fetchCommentsFailure(errorMsg));
      });
  };
};

const shouldFetchComments = ({ comments: { comments } }) => {
  return !(comments.length > 0);
};

export const fetchCommentsIfNeeded = () => (dispatch, getState) => {
  if (shouldFetchComments(getState())) {
    return dispatch(fetchComments());
  }
};
