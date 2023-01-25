import React from 'react';
import Comments from '../Comments/Comments';
import { useTypedSelector } from '../../hooks/useTypedSelector';
import { useEffect } from 'react';
import { useCommentsActions } from '../../hooks/useActions';
import { IVideo } from '../../types/types';

interface IProps {
  selected: IVideo;
}

const VideoDetail: React.FC<IProps> = ({ selected }) => {
  const { fetchComments } = useCommentsActions();
  const { title, description } = selected!.snippet;
  const { videoId } = selected!.id;
  const { comments, loading, error } = useTypedSelector(
    (state) => state.comments
  );
  const url = `https://www.youtube.com/embed/${videoId}`;
  useEffect(() => {
    fetchComments(videoId);
  }, [videoId]);

  return (
    <div className="video-detail col-md-8">
      <div className="embed-responsive embed-responsive-16by9">
        <iframe title={title} className="embed-responsive-item" src={url} />
      </div>
      <div className="details">
        <div>{title}</div>
        <div>{description}</div>
        {error && <h1>{error}</h1>}
        {loading && <p>Loading comments</p>}
        {!loading && !error && <Comments comments={comments} />}
      </div>
    </div>
  );
};

export default React.memo(VideoDetail);
