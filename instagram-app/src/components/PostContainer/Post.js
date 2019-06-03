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
           
            <div className="likes">
                <p>{this.props.posts.likes} likes</p>
            </div>
             
            
            {this.props.posts.comments.map(comment =>
            <Comment comment={comment} />)}
            <input placeholder="Enter a comment here...">
                
                </input>
        </div>
    )
    }
    
}

export default Post