import {
  FETCH_COMMENTS_REQUEST,
  FETCH_COMMENTS_SUCCESS,
  FETCH_COMMENTS_FAILURE,
  MARK_COMMENT_AS_FAV,
  CREATE_NEW_COMMENT,
  REMOVE_COMMENT_FROM_FAV
} from './commentTypes';

const initialState = {
  loading: false,
  comments: [],
  error: ''
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_COMMENTS_REQUEST:
      return {
        ...state,
        loading: true
      };
    case FETCH_COMMENTS_SUCCESS:
      return {
        ...state,
        loading: false,
        comments: action.payload,
        error: ''
      };
    case FETCH_COMMENTS_FAILURE:
      return {
        ...state,
        loading: false,
        comments: [],
        error: action.payload
      };
    case MARK_COMMENT_AS_FAV:
      return {
        ...state,
        comments: state.comments.map(el =>
          el.id === action.payload.id ? { ...el, isFav: true } : el
        )
      };
    case CREATE_NEW_COMMENT:
      return {
        ...state,
        comments: [...state.comments, action.payload]
      };
    case REMOVE_COMMENT_FROM_FAV:
      return {
        ...state,
        comments: state.comments.map(el =>
          el.id === action.payload.id ? { ...el, isFav: false } : el
        )
      };
    default:
      return state;
  }
};

export default reducer;
