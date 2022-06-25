import React, { useState, useEffect } from 'react'
import axios from "axios"
import { useParams } from "react-router-dom"
import Select from 'react-select'
import tags from '../../data/tags'
import { useNavigate } from 'react-router-dom'



export default function EditPost() {
  const navigate = useNavigate()
  const { postID } = useParams()

  const [formDataInput, setformDataInput] = useState({
    postContent: "",
    tags: [],
  })

  useEffect(() => {
    fetch(`/api/posts/${postID}`)
      .then(resp => resp.json())
      .then(data => setformDataInput(data))
  })

  async function handlePostUpdate(e) {
    try {
      e.preventDefault()
      const { data } = await axios.put(`/api/posts/${postID}`, formDataInput)
      console.log(data);
      navigate('/newsfeed')
    } catch (e) {
      console.log(e);
    }
  }

  function handleChange(e) {
    const { name, value } = e.target
    setformDataInput({
      ...formDataInput,
      [name]: value,
    })
  }

  return <div className="section">
    <div className="container">
      <form onSubmit={handlePostUpdate}>
        <div className="field ">
          <label className="label">Post</label>
          <div className="control">
            <input
              className="input textarea is-primary"
              type="text"
              name={'postContent'}
              value={formDataInput.postContent}
              onChange={handleChange}
              placeholder="Make it count"
            />
          </div>
        </div>

        <div className="field ">
          <h2>Tag it</h2>
          <Select
            defaultValue={[]}
            isMulti
            name="colors"
            options={tags}
            className="basic-multi-select"
            classNamePrefix="select"
            onChange={(tags) => setformDataInput({ ...formDataInput, tags })}
            value={formDataInput.types}
          />
        </div>
        <button className="button is-warning is-light is-fullwidth is-outlined">
          SEND IT
        </button>
      </form>
    </div >
  </div >
}