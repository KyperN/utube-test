import { videosReducer } from './videosReducer';
import { combineReducers } from 'redux';
import { commentsReducer } from './commentsReducer';
export const rootReducer = combineReducers({
  videos: videosReducer,
  comments: commentsReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
