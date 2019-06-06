import React from 'react';
import PropTypes from 'prop-types';
import {CommentDiv,  } from './CommentSectionStyledComponents'


const Comment = props => {
  return (
    <CommentDiv>
      <span className="usernames">{props.comment.username}</span>{' '}
      <span>{props.comment.text}</span>
    </CommentDiv>
  );
};

Comment.propTypes = {
  comment: PropTypes.shape({
    text: PropTypes.string,
    username: PropTypes.string
  })
};

export default Comment;