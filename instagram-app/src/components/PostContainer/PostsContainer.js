import React from 'react'
import Post from './Post'
import '../PostContainer/postContainer.css'

const PostsContainer = (props) => {
    return (
        <div>
            {props.posts.map(post => <Post key={post.id} post={post} />)}
        </div>
    )
}

export default PostsContainer