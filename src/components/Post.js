import React from "react"
// import { Link } from "react-router-dom"
import _ from 'lodash'
import NewComment from "./NewComment"
import CommentElement from "./Comment"


export default function PostElement(postData) {
  // const user = localStorage.getItem('user')
  const [hiddenCommentsNumber, setHiddenCommentsNumber] = React.useState([]) //used to keep track of which posts have show comments clicked on to show comments


  function handleShowCommentsButton(postID) { //handles button
    hiddenCommentsNumber.includes(postID)
      ? setHiddenCommentsNumber(_.remove(hiddenCommentsNumber, (postCheck) => postCheck._id !== postID._id))
      : setHiddenCommentsNumber([...hiddenCommentsNumber, postID])
  }

  return (
    <section className="section">
      <div className="container">

        <div key={postData._id + 0} className=" box mb-5"> {/* double keys due to mapping so adding 'salt' with 0 to avoid conflict when rendering */}
          {/* <img src={postData.owner.profilePic} /> */}
          <div className="content">
            <h4 className="header">
              {/* <Link to={`/users/${postData.owner._id}`}>
          {postData.owner.username}
        </Link> */}
              {/* need to format timestamp */}
              Username
            </h4>
            <div className="is-grouped">
              <p className="content">
                {postData.content}
              </p></div>
            <p>posted at {postData.createdAt}.</p><br />
            <div className="tags level-right"><br />{postData.tags.map((tag, index) => <span key={index} className="tag is-link mx-1 is-light">{tag}</span>)}
              <button className="button is-small is-info is-light mx-1">Edit</button>
            </div>



            <span className="">{5}</span>

            <button className="button is-small is-info is-light mx-5" >Upvote</button>
            <button className="button is-small is-info is-light" onClick={() => handleShowCommentsButton(postData._id)}>Show Comments</button>
            <div className={hiddenCommentsNumber.includes(postData._id) ? '' : `is-hidden`}>
              {postData.userComments.map((comment, index) =>
                <CommentElement {...comment} key={index} />
              )}
              <NewComment {...postData} />
            </div>
          </div>
          {/* <h5>Upvotes: {postData.likedBy.length}</h5> */}
        </div>

      </div>
    </section>
  )
}
