import React from 'react'
import Comment from '../CommentSection/Comment'

class Post extends React.Component{
    render() {
        console.log(this.props)
        return(
        <div>
          <h3>{this.props.posts.username}</h3> 
           <img src={this.props.posts.thumbnailUrl} alt="username-pic" />
           <img src={this.props.posts.imageUrl} alt="pictures" />
          <p>{this.props.posts.likes} likes</p> 
         
         {this.props.posts.comments.map(comment =>
            <Comment comment={comment} />)}
        </div>
    )
    }
    
}

export default Post