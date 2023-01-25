import { Dispatch } from 'redux';
import { fetchVideos } from '../../api/api';
import { VideoActionType, IVideo, VideosAction } from './../../types/types';
export const fetchVideosAction = (term: string) => {
  return async (dispatch: Dispatch<VideosAction>) => {
    try {
      dispatch({
        type: VideoActionType.FETCH_VIDEOS,
      });
      const items = await fetchVideos(term);
      dispatch({
        type: VideoActionType.FETCH_VIDEOS_SUCCESS,
        payload: items,
      });
    } catch (err) {
      dispatch({
        type: VideoActionType.FETCH_VIDEOS_ERROR,
        payload: 'Error fetching videos',
      });
    }
  };
};

export const setSelectedVideoAction = (
  dispatch: Dispatch<VideosAction>,
  video: IVideo
) => {
  dispatch({
    type: VideoActionType.SELECT_VIDEO,
    payload: video,
  });
};
