
import React from 'react'
// import { Link } from "react-router-dom"
// import CommentElement from './Comment'
import PostElement from './Post'
import CreateNewPost from './NewPost'

export default function Newsfeed() {
  const [userPosts, setUserPosts] = React.useState([])
  // const [newPost, setNewpost] = React.useState()

  React.useEffect(() => {
    async function getData() {
      const res = await fetch('/api/posts')
      const json = await res.json()
      setUserPosts(json)
      // setNewpost()
    }
    getData()

  }, [])

  // React.useEffect(() => {
  //   setNewpost(localStorage.getItem("newPost"));
  // }, [])


  return (
    <section className="section">
      <div className="container">

        <h1 className="title is-1">
          Newsfeed
        </h1>

        {userPosts ? (
          <div className="columns ">
            <div className="column is-one-third ">
              <CreateNewPost />
            </div>

            <div className="column ">
              <div className="">
                {/* {newPost ? <PostElement {...newPost} /> : null} */}
                {userPosts.map((userPost, index) =>
                  <div key={index}>
                    <PostElement {...userPost} />
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

  )
}