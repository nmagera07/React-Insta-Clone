import React from 'react'


const Comment = (props) => {
    console.log(props)
        return(
            <div>
                <h1>{props.comment.username}</h1>
               <h1>{props.comment.text}</h1>
            </div>
        )
    
}

export default Comment