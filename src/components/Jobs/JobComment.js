import React from "react"
import axios from 'axios'
import { getLoggedInUserId } from "../../lib/auth.js";
// import { Link } from "react-router-dom"

export default function CommentElement(props) {
  // const user = localStorage.getItem('user')

  const currUser = getLoggedInUserId();

  const commentId = props.comments._id

  async function handleCommentDelete () {
    window.location.reload(false)
    await axios.delete(`/api/jobs/${props.jobId}/${commentId}`)
  }

  return (
  
    <article className="media my-5 mx-5">
      {console.log(typeof props.comments.createdAt)}
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
            <p><strong>{props.username}</strong> posted on
              <small> {props.comments.createdAt.replace('T', ' - ').slice(0, - 8)}<br /></small>
              {props.comments.content}</p>
            {/* <p>{comment.likedBy.length} upvotes</p> */}
          </div>
          <div>
            { currUser && <button onClick={handleCommentDelete}>Delete</button> }
          </div>
        </div>
      </div>
    </article>
  )
}
