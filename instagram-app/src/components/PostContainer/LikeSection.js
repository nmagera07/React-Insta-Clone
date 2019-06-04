import React from 'react'

const LikeSection = (props) => {
    return (
        <div
            onClick={props.incrementLike}
        >
            <div>

            </div>
            <div>

            </div>
            <div>
                <div>{props.likes)</div>
            </div>
        </div>
    )
}

export default LikeSection