import React from "react"
import axios from 'axios'
// import { Link } from "react-router-dom"

export default function CommentElement(props) {
  // const user = localStorage.getItem('user')

  console.log(props);

  const commentId = props.comments._id

  async function handleCommentDelete () {
    await axios.delete(`/api/jobs/${props.jobId}/${commentId}`)
  }

  return (
    <article className="media my-5 mx-5">
      <div key={props.comments._id + 0}> {/* double keys due to mapping so adding 'salt' with 0 to avoid conflict when rendering */}
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
            <p><strong>{props.username}</strong> at
              <small> {props.comments.createdAt.replace('T', ' - ')}:<br /></small>
              {props.comments.content}</p>
            {/* <p>{comment.likedBy.length} upvotes</p> */}
          </div>
          <div>
            <button onClick={handleCommentDelete}>Delete</button>
          </div>
        </div>
      </div>
    </article>
  )
}
