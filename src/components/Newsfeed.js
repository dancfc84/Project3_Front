import React from 'react'
// import { Link } from "react-router-dom"
// import CommentElement from './Comment'
import PostElement from './Post'
// import CreateNewPost from './NewPost'
import axios from 'axios'
import Select from 'react-select'
// import { useNavigate } from 'react-router-dom'
import tags from '../data/tags'

export default function Newsfeed() {
  const [userPosts, setUserPosts] = React.useState([])
  // const [newPost, setNewpost] = React.useState()
  const [formDataInput, setformDataInput] = React.useState({
    postContent: "",
    tags: [],
  })


  React.useEffect(() => {                   //gets all current posts in DB
    async function getData() {
      const res = await fetch('/api/posts')
      const json = await res.json()
      setUserPosts(json)
      // setNewpost()
    }
    getData()
  }, [])

  function handleChangeEvent(e) {
    setformDataInput({
      ...formDataInput,
      [e.target.name]: e.target.value,
    })
  }


  function handleComments(data1) {
    console.log(data1);
  }

  async function handleAuth(e) {

    e.preventDefault()
    const newFormData = {
      ...formDataInput,
      tags: formDataInput.tags.map(type => type.value),
    }

    try {
      // const token = localStorage.getItem("token")
      const { data } = await axios.post('/api/posts/', newFormData)
      setUserPosts([newFormData, ...userPosts])
      //query APi 2nd time
      // , {
      // headers: {
      //   'Authorization': `Bearer ${token}`,
      // },
      // })
      // navigate('/')
      setformDataInput(formDataInput)
    } catch (err) {
      console.log(err.response.data);
    }
  }

  return (
    <>
      <section className="section">
        <div className="container">

          <h1 className="title is-1">
            Newsfeed
          </h1>

          {userPosts ? (
            <div className="columns ">
              <div className="column is-one-third ">
                <div className="section">
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
              </div>

              <div className="column ">
                <div >
                  {userPosts.map((userPost, index) =>
                    <div key={index}>
                      <PostElement handleComments={handleComments} {...userPost}  />
                    </div>
                  )}

                </div>
              </div>
            </div>

          ) : (

            <p>Newsfeed is loading posts...</p>
          )}
        </div>
      </section>
    </>
  )
}