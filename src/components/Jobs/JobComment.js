import React, { useEffect, useState } from "react"
import axios from 'axios'
import { getLoggedInUserId } from "../../lib/auth.js";
// import { Link } from "react-router-dom"
import styles from "./JobComment.module.css"
import baseUrl from "../../config.js"

export default function CommentElement(props) {
  const currUser = getLoggedInUserId();
  console.log(`this is my props ${props.comments}`);
  console.log(currUser);
  console.log(props.comment);

  const commentId = props.comment._id

  const [likes, setLikes ] = useState(props.comment.likes);
  const [isHeartRed, setIsHeartRed] = useState(false)

  async function handleCommentDeleteClick () {
    props.handleCommentDelete(commentId)
  }

  useEffect(() => {
    const userLiked = props.comment.userLiked.filter((user) => {
      return user === currUser
    })

    if (userLiked.length > 0) {
      setIsHeartRed(true)
    }
  }, [])

  
  async function handleLike () {
    const like = await axios.put(`${baseUrl}/jobs/${props.jobId}/${commentId}/likes`, { currentUser: currUser, likes: likes + 1 })
    console.log(like);
    setLikes(like.data[0].likes);
    setIsHeartRed(true)
  }
  
  return (
    <article className="media my-5 mx-5">
      <div key={props.comment._id}>
        <div className={styles.comment_container}>
          <div >
            <p><strong>{props.comment.user.username}</strong> posted on
              <small> {props.comment.createdAt.replace('T', '  - ').slice(0, - 8)}<br /></small></p>
            <p className={styles.message_content}>{props.comment.content}</p>
            <div className={styles.like_container}>
              <div onClick={handleLike} className={`${styles.heart} ${isHeartRed && styles.is_active}`}></div>
              <p>{likes} {likes > 1 ? "likes" : "like"}</p>
            </div>
          </div>
          <div className={styles.delete_button_container}>
            {currUser === props.comment.user._id && <button className={styles.del_button} onClick={handleCommentDeleteClick}>Delete</button>}
          </div>
        </div>
      </div>
    </article>
  )
}
