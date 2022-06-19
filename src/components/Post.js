import React from "react"
import { Link } from "react-router-dom"

export default function PostElement(postData) {
  // const user = localStorage.getItem('user')


  return (

    <div key={postData._id + 0} > {/* double keys due to mapping so adding 'salt' with 0 */}
      <img src={postData.owner.profilePic} />
      <h4>
        <Link to={`/users/${postData.owner._id}`}>
          {postData.owner.username}
        </Link>
        at {postData.timestamp}             {/* need to format timestamp */}
      </h4>
      <div>{postData.tags.map(tag => <div key={tag._id}>{tag}</div>)}</div>
      <p>
        {postData.content}
      </p>
      <h5>Upvotes: {postData.likedBy.length}</h5>
    </div>
  )
}
