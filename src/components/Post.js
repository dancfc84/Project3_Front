import React from "react"
// import { Link } from "react-router-dom"
import _ from 'lodash'


export default function PostElement(postData) {
  // const user = localStorage.getItem('user')
  const [hiddenCommentsNumber, setHiddenCommentsNumber] = React.useState([]) //used to keep track of which posts have show comments clicked on to show comments


  function handleShowCommentsButton(postID) { //handles button
    hiddenCommentsNumber.includes(postID)
      ? setHiddenCommentsNumber(_.remove(hiddenCommentsNumber, (postCheck) => postCheck._id !== postID._id))
      : setHiddenCommentsNumber([...hiddenCommentsNumber, postID])
  }

  return (


    <div key={postData._id + 0} className=" box mb-5"> {/* double keys due to mapping so adding 'salt' with 0 to avoid conflict when rendering */}
      {/* <img src={postData.owner.profilePic} /> */}
      <div className=" content">
        <h4 className="header">
          {/* <Link to={`/users/${postData.owner._id}`}>
          {postData.owner.username}
        </Link> */}
          {/* need to format timestamp */}
          Username
        </h4>

        <p className="content">
          {postData.postContent}
        </p></div>
      <smaill>posted at {postData.createdAt}.</smaill><br />
      <div className="level-right"><br />{postData.tags.map(tag => <div key={tag._id} className="tag mr-2	">{tag}</div>)}</div><br />
      {'e.g. 5'}<button className="button is-small is-info is-light mx-5" onClick={'like'}>Upvote</button>

      <button className="button is-small is-info is-light" onClick={() => handleShowCommentsButton(postData._id)}>Show Comments</button>
      <div className={hiddenCommentsNumber.includes(postData._id) ? '' : `is-hidden`}> Comments:
        {/* {postData.userComments} */}
      </div>

      {/* <h5>Upvotes: {postData.likedBy.length}</h5> */}
    </div>
  )
}
