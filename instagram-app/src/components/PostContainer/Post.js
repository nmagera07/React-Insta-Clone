import React from 'react'
import Comment from '../CommentSection/Comment'

class Post extends React.Component{
    constructor(props) {
        super(props)
        this.state = {
            likes: props.posts.likes
        }
    }

    addingLikes = () => {
        let likes = this.state.likes + 1
        this.setState({ likes })
    }

    

    render() {
        let moment = require('moment');
        return(
        <div className="post-container"> 
            <div className="post-header">
                <img src={this.props.posts.thumbnailUrl} alt="username-pic" />
                <h3>{this.props.posts.username}</h3>
            </div>
           
                <img src={this.props.posts.imageUrl} alt="pictures" />
            <div className="picture-icons" >
                <img src="http://www.transparentpng.com/thumb/instagram-heart/OtpLVC-heart-shaped-instagram-transparent-image.png" alt="heart picture" />
                <img src="http://chittagongit.com/images/instagram-comment-bubble-icon/instagram-comment-bubble-icon-12.jpg" alt="comment picture" />
            </div>
            
            <div className="likes" >
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