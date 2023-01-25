import {
  CommentsAction,
  CommentActionType,
  ICommentsState,
} from './../types/types';

const init: ICommentsState = {
  comments: [],
  loading: false,
  error: null,
};

export const commentsReducer = (
  state = init,
  action: CommentsAction
): ICommentsState => {
  switch (action.type) {
    case CommentActionType.FETCH_COMMENTS: {
      return { ...state, loading: true };
    }
    case CommentActionType.FETCH_COMMENTS_SUCCESS: {
      return { ...state, comments: action.payload, loading: false };
    }
    case CommentActionType.FETCH_COMMENTS_ERROR: {
      return { ...state, error: action.payload, loading: false };
    }
    default: {
      return { ...state };
    }
  }
};
