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
      ...formDataInput,
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
      // const token = localStorage.getItem("token")
      console.log(formDataInput);
      const { data } = await axios.post(`/api/posts/${props.commentID}/comment`, formDataInput)
      // , {
      //   // headers: {
      //   //   'Authorization': `Bearer ${token}`,
      //   // },
      // })
      // navigate('/')
      console.log(data);
    } catch (err) {
      console.log(err.response.data);
    }
  }


  return <div className="">
    <div className="container">
      <form onSubmit={handleAuth}>
        <div className="field ">
          <label className="label">Comment</label>
          <div className="control">
            <input
              className="input text is-secondary"
              type="text"
              name={'content'}
              value={formDataInput.content}
              onChange={handleChangeEvent}
              placeholder="Fascinating, can you share more?"
            />
          </div>
        </div>
        <button className="button is-outlined">
          Comment
        </button>
      </form>
    </div >
  </div >
}