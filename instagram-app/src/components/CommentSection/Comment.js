import React from 'react'


const Comment = (props) => {
    console.log(props)
        return(
            <div className="comments">
                <h3>{props.comment.username}</h3>
                <p>{props.comment.text}</p>
                
            </div>
        )
    
}

export default Comment