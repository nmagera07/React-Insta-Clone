import React from 'react'
import Comment from '../CommentSection/Comment'

class Post extends React.Component{
    render() {
        console.log(this.props)
        return(
        <div className="post-container"> 
            <div className="post-header">
                <img src={this.props.posts.thumbnailUrl} alt="username-pic" />
                <h3>{this.props.posts.username}</h3>
            </div>
           
                <img src={this.props.posts.imageUrl} alt="pictures" />
            <div className="picture-icons">
                <img src="http://www.transparentpng.com/thumb/instagram-heart/OtpLVC-heart-shaped-instagram-transparent-image.png" alt="heart picture"/>
                <img src="http://chittagongit.com/images/instagram-comment-bubble-icon/instagram-comment-bubble-icon-12.jpg" alt="comment picture" />
            </div>
            
            <div className="likes">
                <p>{this.props.posts.likes} likes</p>
            </div>
             
            
            {this.props.posts.comments.map(comment =>
            <Comment comment={comment} />)}
            <div className="comment-bar">
                <input placeholder="Add a comment...">
                
                </input>
            </div>
            
        </div>
    )
    }
    
}

export default Post