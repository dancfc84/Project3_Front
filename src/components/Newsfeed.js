
import React from 'react'
// import { Link } from "react-router-dom"
// import CommentElement from './Comment'
import PostElement from './Post'
import CreateNewPost from './NewPost'

export default function Newsfeed() {
  const [userPosts, setUserPosts] = React.useState([])



  React.useEffect(() => {
    const getData = async () => {
      const res = await fetch('/api/posts')
      const json = await res.json()

      setUserPosts(json)
    }
    getData()
  }, [])

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
                {userPosts.map((userPost, index) =>
                  <div key={index}>
                    <PostElement {...userPost} />
                    {/* {userPost.comments.map(comment =>
                <div key={comment._id}>
                  <CommentElement {...comment} />
                </div>
              )} */}
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