import React from 'react'
import PropTypes from 'prop-types'

const Comment = (props) => {
        return(
            <div className="comments">
                <h3>{props.comment.username}</h3>
                <p>{props.comment.text}</p>
                
            </div>
        )
    
}

Comment.propTypes = {
  comment: PropTypes.shape({
    text: PropTypes.string,
    username: PropTypes.string
  })
};

export default Comment