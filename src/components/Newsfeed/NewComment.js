import React, { useState } from 'react'
// import Select from 'react-select'
// import { useNavigate } from 'react-router-dom'
// import tags from '../data/tags'
import axios from 'axios'


export default function NewComment(props) {
  // const navigate = useNavigate()

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
    // const newFormData = {
    //   ...formDataInput,
    //   tags: formDataInput.tags.map(type => type.value),
    // }

    try {
      // console.log();
      props.setNewCommentState(formDataInput)
      // const token = localStorage.getItem("token")
      const { data } = await axios.post(`/api/posts/${props.postIDprop}/comment`, formDataInput)
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