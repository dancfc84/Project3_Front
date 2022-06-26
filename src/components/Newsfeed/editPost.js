import React, { useState, useEffect } from 'react'
import axios from "axios"
import { useParams } from "react-router-dom"
import Select from 'react-select'
import postTags from '../../data/tags'
import { useNavigate } from 'react-router-dom'



export default function EditPost() {
  const navigate = useNavigate()
  const { postID } = useParams()

  const [formDataInput, setformDataInput] = useState({
    postContent: "",
    tags: [],
  })


  //prepopulates the state of the form - faster would be via props without API
  useEffect(() => {
    fetch(`/api/posts/${postID}`)
      .then(resp => resp.json())
      .then(data => setformDataInput(data))
  }, [postID])

  //updates the post on button click via API
  async function handlePostUpdate(e) {
    try {
      e.preventDefault()
      const { data } = await axios.put(`/api/posts/${postID}`,
        formDataInput)
      console.log(data);
      navigate('/newsfeed')
    } catch (e) {
      console.log(e);
    }
  }

  //handles input changes in the fields
  function handleChange(e) {
    const { name, value } = e.target
    setformDataInput({
      ...formDataInput,
      [name]: value,
    })
  }

  function handleCancel() {
    navigate(`/newsfeed/`)
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
            options={postTags}
            className="basic-multi-select"
            classNamePrefix="select"
            onChange={(tags) => setformDataInput({ ...formDataInput, tags })}
            value={formDataInput.tags}
          />
        </div>
        <br />
        <br />
        <button type="submit" className="button is-light is-outlined is-rounded is-primary mx-1">
          Save Post </button>
        <button onClick={handleCancel} className="button is-rounded is-warning is-light is-outlined  mx-1">
          Cancel Edit </button>
      </form>
      {/* tags update still not working */}
    </div >
  </div >
}