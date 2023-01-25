import { VideosAction, VideoActionType, IVideosState } from '../types/types';

const init: IVideosState = {
  videos: [],
  loading: false,
  selected: null,
  error: null,
};

export const videosReducer = (
  state = init,
  action: VideosAction
): IVideosState => {
  switch (action.type) {
    case VideoActionType.FETCH_VIDEOS: {
      return { ...state, loading: true };
    }
    case VideoActionType.FETCH_VIDEOS_SUCCESS: {
      return { ...state, loading: false, videos: action.payload };
    }
    case VideoActionType.SELECT_VIDEO: {
      return { ...state, selected: action.payload };
    }
    case VideoActionType.FETCH_VIDEOS_ERROR: {
      return {
        ...state,
        error: action.payload,
        loading: false,
      };
    }
    default: {
      return { ...state };
    }
  }
};
