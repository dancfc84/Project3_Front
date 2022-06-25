import React, { useState } from 'react'
import axios from 'axios'


export default function NewUpvote(props) {
  const [upvotedBy, setUpvotedBy] = useState({
    upvotedBy: [],
  })

  function handleChangeEvent(e) {
    setUpvotedBy({
      ...upvotedBy,
      upvotedBy: props.userUpvotedBy,
    })
  }

  async function handleAuth(e) {
    e.preventDefault()

    try {
      const { data } = await axios.put(`/api/posts/${props.postIDprop}`, upvotedBy)

    } catch (err) {
      console.log(err.response.data);
    }
  }


  return <div className=" box">

    <div className="">
      <form onSubmit={handleAuth}>
        <div className="field">
          <div className="control columns">
            <button className="button mx-4 is-outlined">
              Post your comment
            </button>
            <input
              className="input column text is-secondary"
              type="text"
              name={'content'}
              value={formDataInput.content}
              onChange={handleChangeEvent}
              placeholder="Fascinating, can you share more?"
            />
          </div>
        </div>

      </form>
    </div >
  </div >
}