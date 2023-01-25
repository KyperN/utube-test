import React, { useMemo } from 'react';
import { useTypedSelector } from '../../hooks/useTypedSelector';
import { RootState } from '../../redux/rootReducer';
import { IComment } from '../../types/types';
import CommentItem from '../CommentItem/CommentItem';

interface IProps {
  comments: IComment[];
}

const Comments: React.FC<IProps> = ({ comments }) => {
  const commentsElements = useMemo(() => {
    return comments.map(({ snippet }) => (
      <CommentItem key={snippet.topLevelComment.id} comment={{ snippet }} />
    ));
  }, [comments]);

  return <div>{commentsElements}</div>;
};

export default Comments;
