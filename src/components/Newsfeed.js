
import React from 'react'
import _ from 'lodash'
import { Link } from "react-router-dom"
import CommentElement from './Comment'
import PostElement from './Post'

export default function Newsfeed() {
  const [userPosts, setUserPosts] = React.useState([])

  const [hiddenCommentsNumber, setHiddenCommentsNumber] = React.useState([]) //used to keep track of which posts have show comments clicked on to show comments

  function handleShowCommentsButton(postID) { //handles button
    hiddenCommentsNumber.includes(postID)
      ? setHiddenCommentsNumber(_.remove(hiddenCommentsNumber, (postCheck) => postCheck._id !== postID._id))
      : setHiddenCommentsNumber([...hiddenCommentsNumber, postID])
  }

  React.useEffect(() => {
    const getData = async () => {
      const res = await fetch('/api/userposts')
      const json = await res.json()
      setUserPosts(json)
    }
    getData()
  }, [])

  return (
    <div className="section">
      <h1 className="title">
        Newsfeed
      </h1>
      <div className="container card">
        {userPosts.map(userPost =>
          <div key={userPost._id}>
            <PostElement {...userPost} />
            <button className="button is-medium is-info is-light" onClick={() => handleShowCommentsButton(userPost._id)}>Show Comments</button>
            <div className={hiddenCommentsNumber.includes(userPost._id) ? '' : `is-hidden`}> {/* need to format timestamp */}
              {userPost.comments.map(comment =>
                <div key={comment._id}>
                  <CommentElement {...comment} />
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    </div >
  )
}