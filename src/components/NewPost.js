// import axios from 'axios'
import React, { useState } from 'react'
// import { useNavigate } from 'react-router-dom'


export default function CreateNewPost() {
  // const navigate = useNavigate()

  const [formDataInput, setformDataInput] = useState({

    postContent: "",
    tags: '',

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
    <div className="container ">
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

        <div className="field"> <h2>Tag it</h2>

          <div className="checkbox">DevOps
            <input type="checkbox" id="DevOps" name="DevOps" value="DevOps" />
          </div>

          <div className="checkbox">Security
            <input type="checkbox" id="security" name="security" value="Security" />
          </div>

          <div className="checkbox">UI
            <input type="checkbox" id="UI" name="UI" value="Security" />
          </div>

          <div className="checkbox"> UX
            <input type="checkbox" id="UX" name="UX" value="Security" />
          </div>

          <div className="checkbox">FrontEnd
            <input type="checkbox" id="FrontEnd" name="FrontEnd" value="Security" />
          </div>

          <div className="checkbox">BackEnd
            <input type="checkbox" id="BackEnd" name="BackEnd" value="Security" />
          </div>

        </div>


        <button className="button is-warning is-light is-fullwidth is-outlined">
          SEND IT
        </button>
      </form>
    </div >
  </div >
}