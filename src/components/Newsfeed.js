
import React from 'react'
import _ from 'lodash'
import { Link } from "react-router-dom"


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
      <div className="container">
        {userPosts.map(userPost =>
          <div key={userPost._id}>
            <img src={userPost.owner.profilePic} />
            <h4>
              <Link to={`/users/${userPost.owner._id}`}>
                {userPost.owner.username}
              </Link>
              at {userPost.timestamp}             {/* need to format timestamp */}
            </h4>
            <div>{userPost.tags.map(tag => <div key={tag._id}>{tag}</div>)}</div>
            <p>
              {userPost.content}
            </p>
            <h5>Upvotes: {userPost.likedBy.length}</h5>
            <button className="button is-smal is-info is-light" onClick={() => handleShowCommentsButton(userPost._id)}>Show Comments</button>
            <div className={hiddenCommentsNumber.includes(userPost._id) ? '' : `is-hidden`}>
              {userPost.comments.map(comment =>
                <div key={comment._id}>
                  <Link to={`/users/${userPost.owner._id}`}>
                    <h6>{comment.owner.username} </h6>
                  </Link>
                  <p>at {comment.timestamp}:</p>
                  <p>{comment.content}</p>
                  <p>{comment.likedBy.length} upvotes</p>
                </div>
              )
              }
            </div>
          </div>
        )}
      </div>
    </div>
  )
}