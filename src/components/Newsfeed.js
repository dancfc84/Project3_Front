
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
    <>
      <h1 className="title is-1">
        Newsfeed
      </h1>
      <div className="level column">
        <div className="column level-item is-one-third ">
          <CreateNewPost />
        </div>
        <div className="level-item">
          <div className="column is-one-third">
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
    </>
  )
}