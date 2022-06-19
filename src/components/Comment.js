import React from "react"
import { Link } from "react-router-dom"

export default function CommentElement(comment) {
  // const user = localStorage.getItem('user')


  return (
    <div key={comment._id + 0}> {/* double keys due to mapping so adding 'salt' with 0 to avoid conflict when rendering */}
      <Link to={`/users/${comment.owner._id}`}>
        <h6>{comment.owner.username} </h6>
      </Link>
      <p>at {comment.timestamp}:</p>
      <p>{comment.content}</p>
      <p>{comment.likedBy.length} upvotes</p>
    </div>

  )
}
