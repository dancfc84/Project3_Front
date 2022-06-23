import React from "react"
// import { Link } from "react-router-dom"

export default function CommentElement(comment) {
  // const user = localStorage.getItem('user')

  console.log(comment.comments.content);

  return (
    <article className="media my-5 mx-5">
      <div key={comment.comments._id + 0}> {/* double keys due to mapping so adding 'salt' with 0 to avoid conflict when rendering */}
        {/* <Link to={`/users/${comment.owner._id}`}> */}
        {/* <h6>{comment.user.username} </h6> */}
        {/* </Link> */}

        {/* <figure className="media-left">
          <p>
            <img />
          </p>
        </figure> */}
        <div className="media-content">
          <div className="content">
            <p><strong>Username </strong>at
              <small> {comment.comments.createdAt}:<br /></small>
              {comment.comments.content}</p>
            {/* <p>{comment.likedBy.length} upvotes</p> */}
          </div>
        </div>
      </div>
    </article>
  )
}
