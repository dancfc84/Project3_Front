import React from 'react'
import PostElement from './Post'
import axios from 'axios'
import Select from 'react-select'
import tags from '../../data/tags'
// import { set } from 'lodash'

export default function Newsfeed() {
  const [userPosts, setUserPosts] = React.useState([])
  const [formDataInput, setformDataInput] = React.useState({
    postContent: "",
    tags: [],
  })
  async function getData() {
    const res = await fetch('/api/posts')
    const json = await res.json()
    setUserPosts(json)
  }                //gets all current posts in DB
  React.useEffect(() => {
    getData()
  }, [])

  function handleChangeEvent(e) {
    setformDataInput({
      ...formDataInput,
      [e.target.name]: e.target.value,
    })
  }

  function updatePostsOnDelete(deletedPostID) { //only shows posts that are not the deleted one without quering the api
    setUserPosts(userPosts.filter((post) =>
      post._id !== deletedPostID
    ))
  }

  async function newPostHandle(e) {
    e.preventDefault()
    const token = localStorage.getItem('token')
    const newFormData = {
      ...formDataInput,
      tags: formDataInput.tags.map(type => type.value),
    }

    try {
      const { data } = await axios.post('/api/posts/', newFormData, {
        headers: { Authorization: `Bearer ${token}` },
      })
      setUserPosts([data, ...userPosts])

      console.log(data._id);
    } catch (e) {
      console.log(e.response.data);
    }
  }



  return (
    <>
      <section className="section">
        <div className="container">

          <h1 className="title is-1">
            Newsfeed
          </h1>


          <div className="columns ">
            <div className="column is-one-third ">
              <div className="section">
                <div className="container">
                  <form onSubmit={newPostHandle}>
                    <div className="field ">
                      <label className="label">Post</label>
                      <div className="control">
                        <textarea
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
                    <button className="button is-rounded is-warning is-light is-fullwidth is-outlined">
                      SEND IT
                    </button>
                  </form>
                </div >
              </div >
            </div>
            {userPosts ? (
              <div className="column ">
                <div >
                  {userPosts.map((userPost, index) =>
                    <div key={index}>
                      <PostElement updatePostsOnDelete={updatePostsOnDelete} {...userPost} />
                    </div>
                  )}
                </div>
              </div>

            ) : (

              <p>Newsfeed is loading posts...</p>
            )}
          </div>
        </div>
      </section>
    </>
  )
}