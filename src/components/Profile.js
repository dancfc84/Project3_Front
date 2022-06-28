import React from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'

// import { Link } from "react-router-dom"


export default function Profile() {
  const navigate = useNavigate()

  // ! Put our form fields in state.
  const [formData, setFormData] = React.useState({
    profilePicture: "",
    bioUser: "",
    firstName: "",
    lastName: "",
    position: "",
    companyRepresented: "",
    yearsExp: "",
  })

  function handleChange(event) {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    })
  }

  // function handleForm(e) {
  //   registering === false ? setRegistering(true) : handleRegistrationConfirm(e)
  // }

  async function handleSubmit(event) {
    event.preventDefault()
    const token = localStorage.getItem('token')

    const newFormData = {
      ...formData,
      type: formData.type.map(type => type.value),
    }

    try {
      const { userID } = useParams()
      const { data } = await axios.post(`/api/profile/${userID}`, newFormData, {
        headers: { Authorization: `Bearer ${token}` },
      })
      console.log(data._id)
      navigate(`/api/profile/${data._id}`)
    } catch (err) {
      console.log(err.response.data)
    }
  }


  return (
    <section className="section">
      <div className="container">
        <form onSubmit={handleSubmit}>
          {/* // ! Me Being Extremely Fancy 🤪: */}
          {['Profile Picture', 'Bio User', 'First Name', 'Last Name', 'Position', 'Company Represented', 'Years of Expierence' ].map(field => {
            return <div key={field} className="field">
              <label className="label">
                {field[0].toUpperCase() + field.slice(1)}
              </label>
              <div className="control">
                <input
                  className="input"
                  type="text"
                  value={formData[field]}
                  onChange={handleChange}
                  name={field}
                />
              </div>
            </div>
          })}
          <button className="button mt-5 is-success">Submit</button>
        </form>
      </div>
    </section>
  )
}
