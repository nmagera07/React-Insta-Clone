import React from 'react';
import { CommentInputForm, OuterDiv } from './CommentSectionStyledComponents'

const CommentInput = props => {
  return (
    <OuterDiv>
    <form onSubmit={props.submitComment}>
      <CommentInputForm
        type="text"
        value={props.comment}
        placeholder="Add comment... "
        onChange={props.changeComment}
      />
    </form>
    </OuterDiv>
  );
};

export default CommentInput;