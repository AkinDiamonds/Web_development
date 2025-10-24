import { useState } from "react";

function LikeButton() {
    const [ liked, setliked ] = useState(false)
    const [ count, setCount ] = useState(0)
    function like() {
        setliked(prevLiked => !prevLiked)
        if(liked === false && count === 0) {setCount(prevCount => prevCount + 1)}
        
    }

    return (
        <div>
            <div>{liked && <span>❤️ Liked</span>} {count} like{count > 1 && <span>s</span>}</div>
            <button onClick={like}>Like</button>
            <div>{count} like</div>
        </div>
    )
}

export default LikeButton