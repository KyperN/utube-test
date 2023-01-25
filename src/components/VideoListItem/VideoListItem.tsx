import React from 'react';
import { IVideo } from '../../types/types';
import { setSelectedVideoAction } from '../../redux/actions/videos';
import { useDispatch } from 'react-redux';
interface Props {
  video: IVideo;
}

const VideoListItem: React.FC<Props> = ({ video }) => {
  const dispatch = useDispatch();

  const { url } = video.snippet.thumbnails.default;

  return (
    <li
      onClick={() => setSelectedVideoAction(dispatch, video)}
      className="list-group-item">
      <div className="video-list media">
        <div className="media-left">
          <img className="media-object" alt="video thumbnail" src={url} />
        </div>
        <div className="media-body">
          <div className="media-heading">{video.snippet.title}</div>
        </div>
      </div>
    </li>
  );
};

export default VideoListItem;
