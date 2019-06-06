import React from "react";
import {FaRegHeart, FaRegComment} from 'react-icons/fa'
import {HeartDiv, LikeDiv} from './PostContainerStyledComponents'

const LikeSection = props => {
  return [
    <div>
      <HeartDiv>
        <FaRegHeart size="24px" onClick={props.incrementLike}/>
        <FaRegComment size="24px"/>
      </HeartDiv>
    
      <LikeDiv>{props.likes} likes</LikeDiv>
    </div>
  ];
};

export default LikeSection;
