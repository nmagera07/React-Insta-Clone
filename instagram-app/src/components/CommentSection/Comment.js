import React from 'react'
import Post from '../PostContainer/Post'

const Comment = (props) => {
        return(
            <div>
               <h1>{props.comments.text}</h1>
            </div>
        )
    
}

export default Comment