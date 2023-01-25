import { useDispatch } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as VideoActionCreators from '../redux/actions/videos';
import * as CommentActionCreators from '../redux/actions/comments';

export const useVideosActions = () => {
  const dispatch = useDispatch();
  return bindActionCreators(VideoActionCreators, dispatch);
};
export const useCommentsActions = () => {
  const dispatch = useDispatch();
  return bindActionCreators(CommentActionCreators, dispatch);
};
