import React from 'react';
import { Image, Header, Username, HeaderDiv} from './PostContainerStyledComponents' 

const PostHeader = props => {
  return (
    <Header>
      <HeaderDiv>
        <Image
          alt="post header"
          className="post-thumb"
          src={props.thumbnailUrl}
        />
      <Username>{props.username}</Username>
      </HeaderDiv>
    </Header>
  );
};

export default PostHeader;
