// import axios from 'axios'
import React, { useState } from 'react'
import Select from 'react-select'
// import { useNavigate } from 'react-router-dom'
import tags from '../data/tags'


export default function CreateNewPost() {
  // const navigate = useNavigate()

  const [formDataInput, setformDataInput] = useState({
    postContent: "",
    tags: [],
  })



  function handleChangeEvent(e) {
    const { name, value } = e.target
    setformDataInput({
      ...formDataInput,
      [name]: value,
    })
  }

  // async function handleAuth(e) {
  //   e.preventDefault()
  //   try {
  //     const token = localStorage.getItem("token")
  //     const { data } = await axios.post('/api/hotels', formDataInput, {
  //       headers: {
  //         'Authorization': `Bearer ${token}`,
  //       },
  //     })
  //     navigate('/')
  //   } catch (err) {
  //     console.log(err.response.data);
  //   }
  // }


  return <div className="section">
    <div className="container">
      <form onSubmit={'Needs authentication'}>

        <div className="field">
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

        <div className="field">
          <h2>Tag it</h2>
          <Select
            defaultValue={[]}
            isMulti
            name="colors"
            options={tags}
            className="basic-multi-select"
            classNamePrefix="select"

          />
        </div>
        <button className="button is-warning is-light is-fullwidth is-outlined">
          SEND IT
        </button>
      </form>
    </div >
  </div >
}