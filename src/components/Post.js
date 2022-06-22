import React from "react"
// import { Link } from "react-router-dom"
import _ from 'lodash'
import NewComment from "./NewComment"
import CommentElement from "./Comment"


export default function PostElement(postData) {
  // const user = localStorage.getItem('user')
  const [hiddenCommentsNumber, setHiddenCommentsNumber] = React.useState([]) //used to keep track of which posts have show comments clicked on to show comments
  const [comments, setComments] = React.useState()



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
            <h4 className="header">Username
              {/* <Link to={`/users/${postData.owner._id}`}>
              {postData.owner.username}
              </Link> */}
              {/* need to format timestamp */}
            </h4>
            <div className="is-grouped">
              <p className="content">
                {postData.postContent}
              </p></div>

            <p>posted at {postData.createdAt.toLocaleString("es-ES", {dateStyle: "short", timeStyle: "short"})}.</p><br />
            <h5 className="level-right" >Tags:</h5>

            <div className="tags level-right">
              {postData.tags.map((tag, index) =>
                <span key={index} className="tag is-link mx-1 is-light">
                  {tag}
                </span>)} <br />
            </div>

            <div className="level-right" ><button className="button is-small is-info is-light mx-1">
              Edit
            </button></div>

            <span className="">{5}</span>

            <button className="button is-small is-info is-light mx-5" >Upvote</button>

            <button className="button is-small is-info is-light" onClick={() => handleShowCommentsButton(postData._id)}>
              Show Comments
            </button>

            <div className={hiddenCommentsNumber.includes(postData._id) ? '' : `is-hidden`}>
              {comments ?
                comments.map((comment, index) =>
                  <div key={index}>
                    <CommentElement {...comment} />
                    <div className="level-right" ><button className="button is-small is-info is-light mx-1">
                      Edit
                    </button>
                    </div>
                  </div>

                ) : null}
              <br />
              <NewComment setComments={setComments} handleComments={postData.handleComments} {...postData} />
            </div>
          </div>
          {/* <h5>Upvotes: {postData.likedBy.length}</h5> */}
        </div>

      </div>
    </section>
  )
}
