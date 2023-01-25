import { Dispatch } from 'redux';
import { CommentActionType, CommentsAction } from './../../types/types';
import { getComments } from '../../api/api';

export const fetchComments = (videoId: string) => {
  return async (dispatch: Dispatch<CommentsAction>) => {
    try {
      dispatch({
        type: CommentActionType.FETCH_COMMENTS,
      });
      const comments = await getComments(videoId);
      dispatch({
        type: CommentActionType.FETCH_COMMENTS_SUCCESS,
        payload: comments,
      });
    } catch (err) {
      dispatch({
        type: CommentActionType.FETCH_COMMENTS_ERROR,
        payload: 'Error fetching comments',
      });
    }
  };
};
