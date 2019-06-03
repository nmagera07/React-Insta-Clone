import React from 'react'
import Comment from '../CommentSection/Comment'

class Post extends React.Component{
    render() {
        return(
        <div>
          <h3><img src={this.props.posts.thumbnailUrl} alt="username-pic" /> {this.props.posts.username}</h3> 
           
           <img src={this.props.posts.imageUrl} alt="pictures" />
          <p>{this.props.posts.likes} likes</p> 
         
         <Comment comments={this.props.posts.comments}/>
        </div>
    )
    }
    
}

export default Post