import React from "react";

const LikeSection = props => {
  return [
    <div className="like-section" key="likes-icons-container">
      <div className="like-section-wrapper">
        <i className="far fa-heart"  />
      </div>
      <div className="like-section-wrapper">
        <i className="far fa-comment" />
      </div>
    </div>,
    <div className="like-section" key="likes-container">
      <div className="like-section-wrapper" onClick={props.incrementLike}>{props.likes}</div>
    </div>
  ];
};

export default LikeSection;
