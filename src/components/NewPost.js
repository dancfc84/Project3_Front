import React, { useState } from 'react'
import Select from 'react-select'
// import { useNavigate } from 'react-router-dom'
import tags from '../data/tags'
import axios from 'axios'


export default function CreateNewPost() {
  // const navigate = useNavigate()

  const [formDataInput, setformDataInput] = useState({
    postContent: "",
    tags: [],
  })

  function handleChangeEvent(e) {
    setformDataInput({
      ...formDataInput,
      [e.target.name]: e.target.value,
    })
  }

  async function handleAuth(e) {
    e.preventDefault()
    const newFormData = {
      ...formDataInput,
      tags: formDataInput.tags.map(type => type.value),
    }
    
    try {
      // const token = localStorage.getItem("token")
      console.log(formDataInput);
      const { data } = await axios.post('/api/posts/', newFormData)
      localStorage.setItem("newPost", data)

      // , {
      //   // headers: {
      //   //   'Authorization': `Bearer ${token}`,
      //   // },
      // })
      // navigate('/')
      setformDataInput(formDataInput)
      console.log(data);
    } catch (err) {
      console.log(err.response.data);
    }
  }


  return <div className="section">
    <div className="container">
      <form onSubmit={handleAuth}>
        <div className="field ">
          <label className="label">Post</label>
          <div className="control">
            <input
              className="input textarea is-primary"
              type="text"
              name={'postContent'}
              value={formDataInput.postContent}
              onChange={handleChangeEvent}
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