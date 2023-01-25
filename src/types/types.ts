export interface IVideo {
  onVideoSelect?: () => void;
  id: {
    videoId: string;
  };
  etag: string;
  snippet: {
    title: string;
    description: string;
    thumbnails: {
      default: {
        url: string;
      };
    };
  };
}

export interface IComment {
  snippet: {
    topLevelComment: {
      id: string;
      snippet: {
        textDisplay: string;
        authorDisplayName: string;
      };
    };
  };
}

export interface IVideosState {
  videos: IVideo[];
  loading: boolean;
  selected: IVideo | null;
  error: null | string;
}
export enum VideoActionType {
  FETCH_VIDEOS_SUCCESS = 'FETCH_VIDEOS_SUCCESS',
  FETCH_VIDEOS = 'FETCH_VIDEOS',
  SELECT_VIDEO = 'SELECT_VIDEO',
  FETCH_VIDEOS_ERROR = 'FETCH_VIDEOS_ERROR',
}
interface IFetchVideosAction {
  type: VideoActionType.FETCH_VIDEOS;
}
interface IFetchVideosSuccessAction {
  type: VideoActionType.FETCH_VIDEOS_SUCCESS;
  payload: IVideo[];
}
interface ISetSelectedVideo {
  type: VideoActionType.SELECT_VIDEO;
  payload: IVideo;
}
interface IFetchVideosError {
  type: VideoActionType.FETCH_VIDEOS_ERROR;
  payload: string;
}
export type VideosAction =
  | IFetchVideosAction
  | IFetchVideosSuccessAction
  | ISetSelectedVideo
  | IFetchVideosError;

export interface ICommentsState {
  comments: IComment[];
  loading: boolean;
  error: null | string;
}
export enum CommentActionType {
  FETCH_COMMENTS = 'FETCH_COMMENTS',
  FETCH_COMMENTS_SUCCESS = 'FETCH_COMMENTS_SUCCESS',
  FETCH_COMMENTS_ERROR = 'FETCH_COMMENTS_ERROR',
}

export interface IFetchCommentsAction {
  type: CommentActionType.FETCH_COMMENTS;
}
export interface IFetchCommentsSuccessAction {
  type: CommentActionType.FETCH_COMMENTS_SUCCESS;
  payload: IComment[];
}
export interface IFetchCommentsErrorAction {
  type: CommentActionType.FETCH_COMMENTS_ERROR;
  payload: string;
}
export type CommentsAction =
  | IFetchCommentsAction
  | IFetchCommentsSuccessAction
  | IFetchCommentsErrorAction;
