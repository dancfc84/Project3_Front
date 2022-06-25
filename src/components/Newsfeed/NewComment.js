import React, { useState } from 'react'
import axios from 'axios'


export default function NewComment(props) {

  const [formDataInput, setformDataInput] = useState({
    content: "",
  })

  function handleChangeEvent(e) {
    setformDataInput({
      [e.target.name]: e.target.value,
    })
  }


  async function handleAuth(e) {
    e.preventDefault()
    const newComment = {
      ...formDataInput,
      createdAt: "just now",
    }
    try {
      props.setNewState(newComment)
      // const token = localStorage.getItem("token")
      const { data } = await axios.post(`/api/posts/${props.postIDprop}/comment`, formDataInput)
      setTimeout(() => {
        props.setNewState(data) //query APi 2nd time
        console.log(data);
      }, 1000)


      // props.setComments([props.userComments, data])
      // props.handleComments(data.userComments[0])
      console.log('NewCommentPostData', data);

      // , {
      //   // headers: {
      //   //   'Authorization': `Bearer ${token}`,
      //   // },
      // })
      // navigate('/')

    } catch (err) {
      console.log(err.response.data);
    }
  }


  return <div className=" box">

    <div className="">
      <form onSubmit={handleAuth}>
        <div className="field">
          <div className="control columns">
            <button className="button is-rounded mx-4 is-outlined">
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