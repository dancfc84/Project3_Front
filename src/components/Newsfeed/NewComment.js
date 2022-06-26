import React from 'react'
import axios from 'axios'
// import { useNavigate } from "react-router-dom"
// import { isCreator, getLoggedInUserId } from '../../lib/auth'



export default function NewComment(props) {

  const [commentContent, setCommentContent] = React.useState('')


  async function handleComment() {
    try {
      const { data } = await axios.post(
        `/api/posts/${props.postIDprop}/comment`,
        { content: commentContent },
        {
          headers: { Authorization: `Bearer ${localStorage.getItem('token')}` },
        }
      )
      props.setPost(data)
    } catch (err) {
      console.log(err.response.data);
    }
  }


  return <div className=" box">

    <div className="">
      <div className="field">
        <div className="control columns">
          <button className="button is-rounded mx-4 is-outlined" onClick={handleComment}>
            Post your comment
          </button>
          <input
            className="text column  is-secondary"
            type="text"
            onChange={(event) => setCommentContent(event.target.value)}
            placeholder="Fascinating, can you share more?"
          ></input>
        </div>
      </div>
    </div >
  </div >
}