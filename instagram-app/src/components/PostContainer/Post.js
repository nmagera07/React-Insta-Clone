import React from 'react'
import Comment from '../CommentSection/Comment'

class Post extends React.Component{
    state = {
        comment: ""
    }

    handleChanges = e => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    addComment = e => {
    e.preventDefault();
        this.props.addComment(this.state.comment);
        this.setState({
        comment: ""
        });
    };

    render() {
        let moment = require('moment');
        return(
        <div className="post-container"> 
            <div className="post-header">
                <img src={this.props.posts.thumbnailUrl} alt="username-pic" />
                <h3>{this.props.posts.username}</h3>
            </div>
           
                <img src={this.props.posts.imageUrl} alt="pictures" />
            <div className="picture-icons">
                <a href="#"><img src="http://www.transparentpng.com/thumb/instagram-heart/OtpLVC-heart-shaped-instagram-transparent-image.png" alt="heart picture"/></a>
                <img src="http://chittagongit.com/images/instagram-comment-bubble-icon/instagram-comment-bubble-icon-12.jpg" alt="comment picture" />
            </div>
            
            <div className="likes">
                <p>{this.props.posts.likes} likes</p>
            </div>
             
            
            {this.props.posts.comments.map(comment =>
            <Comment key={comment.id} comment={comment} />)}
            <h2>{moment().startOf('hour').fromNow()}</h2>
            <div className="comment-bar" onSubmit={this.addComment}>
                <input 
                    placeholder="Add a comment..."
                    value={this.state.comment}
                    name="comment"
                    onChange={this.handleChanges}
                    >
                </input>
            </div>
            
        </div>
    )
    }
    
}

export default Post