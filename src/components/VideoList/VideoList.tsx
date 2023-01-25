import React from 'react';
import { useMemo } from 'react';
import { IVideo } from '../../types/types';
import VideoListItem from '../VideoListItem/VideoListItem';

interface IProps {
  videos: IVideo[];
}

const VideoList: React.FC<IProps> = ({ videos }) => {
  const videoItems = useMemo(() => {
    return videos.map((video: IVideo) => {
      return <VideoListItem key={video.etag} video={video} />;
    });
  }, [videos]);

  return <ul className="col-md-4 list-group">{videoItems}</ul>;
};

export default VideoList;
