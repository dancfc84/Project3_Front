import React, { useState } from "react"
import axios from 'axios'
import { getLoggedInUserId } from "../../lib/auth.js";
// import { Link } from "react-router-dom"

export default function CommentElement(props) {
  const currUser = getLoggedInUserId();

  const commentId = props.comments._id

  const [likes, setLikes ] = useState(props.comments.likes);

  async function handleCommentDelete () {
    const deleteJob = await axios.delete(`/api/jobs/${props.jobId}/${commentId}`)
    console.log(deleteJob);
    window.location.reload(false)
  }
  
  async function handleLike () {
    const like = await axios.put(`/api/jobs/${props.jobId}/${commentId}/likes`, { currentUser: currUser, likes: likes + 1 })
    setLikes(like.data[0].likes);
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
            <p><strong>{props.username}</strong> posted on
              <small> {props.comments.createdAt.replace('T', ' - ').slice(0, - 8)}<br /></small>
              {props.comments.content}</p>
            <p>{likes}</p>
            {/* <p>{comment.likedBy.length} upvotes</p> */}
          </div>
          <div>
            {currUser && <button onClick={handleCommentDelete}>Delete</button>}
          </div>
          <button
            onClick={handleLike}
          >
            <div className="like-button">
              <span>Like</span>
            </div>
          </button>
        </div>
      </div>
    </article>
  )
}
