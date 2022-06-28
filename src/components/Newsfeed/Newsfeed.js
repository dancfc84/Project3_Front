import React, { useState, useEffect } from 'react'
// import { Link } from 'react-router-dom'
import PostElement from './Post'
import axios from 'axios'
import Select from 'react-select'
import tags from '../../data/tags'
// import { set } from 'lodash'


export default function Newsfeed() {
  const [allUserPosts, setAllUserPosts] = useState([])
  const [selectedTag, setSelectedTag] = React.useState([])

  const [search, setSearch] = React.useState("")
  const [formData, setFormData] = useState({
    postContent: "",
    tags: [],
  })

  //handles search
  //handle posts filter

  function postsFilter() {
    return allUserPosts.filter((post) => {
      return (post.tags.includes(selectedTag) || post.postContent.toLowerCase().includes(search.toLowerCase())
      )
    })
  }
  //handles input changes
  function handleChange(e) {
    setFormData((prevState) => {
      return {
        ...prevState,
        [e.target.name]: e.target.value,
      }
    })
  }

  //handles submitting new post
  async function handleSubmit(event) {
    event.preventDefault()
    const token = localStorage.getItem('token')

    const newFormData = {
      ...formData,
      tags: formData.tags.map(tag => tag.value),
    }
    try {
      const { data } = await axios.post('/api/posts/', newFormData, {
        headers: { Authorization: `Bearer ${token}` },
      })

      console.log(data._id)
    } catch (e) {
      console.log(e.response.data)
    }
  }

  //gets data about posts from API db
  useEffect(() => {
    const getPostData = async () => {
      const apiResponse = await fetch('api/posts')
      const json = await apiResponse.json()
      setAllUserPosts(json)
    }
    getPostData()
  }, [])

  return (
    <section className="section">
      <div className="container">

        <h1 className="title is-1">
          Newsfeed
        </h1>


        <div className="columns ">
          <div className="column is-one-third ">
            <div className="section">
              <div className="container box">
                <form onSubmit={handleSubmit}>
                  <div className="field ">
                    <label className="label">Post</label>
                    <div className="control">
                      <textarea
                        className="input textarea is-primary"
                        type="text"
                        name={'postContent'}
                        value={formData.postContent}
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
                      onChange={(tags) => setFormData({ ...formData, tags })}
                      value={formData.tags}
                    />
                  </div>
                  <button className="button is-rounded is-warning is-light is-fullwidth is-outlined">
                    SEND IT
                  </button>
                </form>

              </div >
            </div >
          </div>

          <div>
            <div className="my-5 level-right">
              <input
                value={search}
                placeholder={"Search Newsfeed"}
                onChange={(e) => setSearch(e.target.value)} />
            </div>
            <div>
              <Select
                defaultValue={[]}
                isMulti
                name="tags"
                options={tags}
                className="basic-multi-select my-5 level-right"
                classNamePrefix="select"
                onChange={(tag) => setSelectedTag([ ...selectedTag, tag ])}
                value={selectedTag}
                placeholder={"Filter by tag"}
              />

            </div>
            {postsFilter().map((post, index) => {
              return <div key={index} className="">
                <PostElement
                  {...post} />
              </div>
            }
            )}
          </div>

        </div>
      </div>
    </section >





  )




























}