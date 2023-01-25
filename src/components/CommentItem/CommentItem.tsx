import React from 'react';
import { IComment } from '../../types/types';

interface IProps {
  comment: IComment;
}
const CommentItem: React.FC<IProps> = ({ comment }) => {
  const { textDisplay, authorDisplayName } =
    comment.snippet.topLevelComment.snippet;
  return (
    <div>
      <p>{authorDisplayName} says: </p>
      <p style={{ borderBottom: '1px solid black' }}>{textDisplay}</p>
    </div>
  );
};

export default CommentItem;
