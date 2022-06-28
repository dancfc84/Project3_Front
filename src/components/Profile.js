import React from 'react'
// import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import { getLoggedInUserId } from '../lib/auth.js'

// import { Link } from "react-router-dom"


export default function Profile() {
<<<<<<< HEAD
  // const navigate = useNavigate()
=======
>>>>>>> d24ae6cd69fb28fb85bed7ff68feefc4f3328565

  const [formData, setFormData] = React.useState({
    profilePicture: "",
    bioUser: "",
    firstName: "",
    lastName: "",
    position: "",
    companyRepresented: "",
    yearsExp: "",
  })

  const navigate = useNavigate()
  // const [profile, setProfile] = React.useState(undefined)
  const getData = async () => {
    const res = await fetch(`/api/profile/${getLoggedInUserId()}`)
    const json = await res.json()
    setFormData(json)
  }
  React.useEffect(() => {
    getData()
  }, [])



  function handleChange(event) {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    })
  }

  function handleCancel () {
    navigate(`/newsfeed`)
  }

  // function handleForm(e) {
  //   registering === false ? setRegistering(true) : handleRegistrationConfirm(e)
  // }

  async function handleSubmit(event) {
    event.preventDefault()
    const token = localStorage.getItem('token')

    console.log(formData)
    try {
      const { data } = await axios.put(`/api/profile/${getLoggedInUserId()}`, formData, {
        headers: { Authorization: `Bearer ${token}` },
      })
      console.log(data._id)
      getData()
    } catch (err) {
      console.log(err.response.data)
    }
  }

  function stringWords(field) {
    const stringResult = field[0].toUpperCase() + field.slice(1)
    return stringResult.match(/[A-Z][a-z]+|[0-9]+/g).join(" ")
  }


  return (
    <section className="section">
      <div className="columns is-multiline is-mobile">
        <div className="column is-half-tablet is-half-mobile">
          <div className="card mx-4 my-4">
            <div className="card-content">
              <div className="media">
                <div className="media-content">
                  <h4 className="title is-3">{formData && formData.firstName + " " + formData.lastName}</h4>
                  <p className="subtitle is-5">{formData && "Bio: " + formData.bioUser}</p>
                  <p className="subtitle is-5">{formData && "Position: " + formData.position}</p>
                  <p className="subtitle is-5">{formData && "Company: " + formData.companyRepresented}</p>
                  <p className="subtitle is-5">{formData && "Years of Experience: " + formData.yearsExp}</p>
                  <p className="subtitle is-5">{formData && "Last update: " + formData.lastUpdated}</p>
                </div>
              </div>
            </div>
            <div className="card-image">
              <figure className="image">
                <img src={formData && formData.profilePicture} alt={"profiles"} />
              </figure>
            </div>
          </div>
        </div>
        <div className="column is-half-tablet is-half-mobile">
          <form onSubmit={handleSubmit}>
            {/* // ! Me Being Extremely Fancy 🤪: */}
            {['profilePicture', 'bioUser', 'firstName', 'lastName', 'position', 'companyRepresented', 'yearsExp' ].map(field => {
              return <div key={field} className="field">
                <label className="label">
                  {stringWords(field)}
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
            <button className="button mt-5 is-success">Save</button>
          </form>
          <button onClick={handleCancel} className="button mt-5 is-warning is-light is-outlined">
          Cancel Edit </button>
        </div>
      </div>
    </section>
  )
}
