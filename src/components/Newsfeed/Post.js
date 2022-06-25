import React from "react"
import { Link } from "react-router-dom"
import _ from 'lodash'
import NewComment from "./NewComment"
import CommentElement from "./Comment"
import axios from "axios"


export default function PostElement(postData) {
  // const [upvotedBy, setUpvotedBy] = React.useState(postData.upvotedBy)
  const [hiddenCommentsNumber, setHiddenCommentsNumber] = React.useState([]) //used to keep track of which posts have show comments clicked on to show comments
  const [newCommentState, setNewCommentState] = React.useState(postData.userComments)

  //handles Show Comments button
  function handleShowCommentsButton(postID) {
    hiddenCommentsNumber.includes(postID)
      ? setHiddenCommentsNumber(_.remove(hiddenCommentsNumber, (postCheck) => postCheck._id !== postID._id))
      : setHiddenCommentsNumber([...hiddenCommentsNumber, postID])
  }

  //keeps comments up to date
  function setNewState(newComment) {
    const newComArray = [...newCommentState, newComment]
    setNewCommentState(newComArray)
  }

  //handles post deleting
  async function deletePostHandle() {
    try {
      const deletePost = await axios.delete(`/api/posts/${postData._id}`)
      if (deletePost.status === 204) {
        postData.updatePostsOnDelete(postData._id)
      }
    } catch (e) {
      console.log(e)
    }
  }






  // function upVoteChangeHandle(e) {

  //   setUpvotedBy({
  //     ...upvotedBy,
  //     upvotedBy: [e.target.value],
  //   })
  //   console.log(upvotedBy);
  //   handleVoteUpdateToDB(e)
  // }

  // async function handleVoteUpdateToDB(e) {
  //   e.preventDefault()
  //   try {
  //     const { data } = await axios.put(`/api/posts/${postData._id}`, upvotedBy)
  //     console.log(data);
  //   } catch (err) {
  //     console.log(err.response.data);
  //   }
  // }





















  return (
    <section className="section">
      <div className="container">

        <div key={postData._id + 0} className=" box mb-5"> {/* double keys due to mapping so adding 'salt' with 0 to avoid conflict when rendering */}
          {/* <img src={postData.owner.profilePic} /> */}
          <div className="content">
            <h4 className="header"> User {postData.user}:
              {/* <Link to={`/users/${postData.owner._id}`}>
              {postData.owner.username}
              </Link> */}</h4>
            {/* {modalShow ==
              = true && <editModal {...postData} />} */}

            <div className="is-grouped">
              <p className="content ">
                {postData.postContent}
              </p>
            </div>





            <p className="level-right">
              posted <br />
              {postData.createdAt}</p>
            {postData.tags.length > 0 &&
              <h5 className="level-right">
                Tags:
              </h5>}






            <div className="tags level-right">
              {postData.tags.map((tag, index) =>
                <span key={index} className="tag is-link mx-1 is-light">
                  {tag}
                </span>)} <br />
            </div>






            <div className="level-right" >
              {/* {isCreator(postData.user._id)} 
              // check if user created the post and only then show edit */}
              <Link to={`/postedit/${postData._id}`}>
                <button className="button is-small is-info is-light mx-1" >
                  Edit </button>
              </Link>

              {/* {isCreator(postData.user._id)} 
              // check if user created the post and only then show edit */}
              <button className="button is-small is-warning is-light mx-1" onClick={deletePostHandle} >
                Delete </button>
            </div>

            <span className="">{postData.upvotedBy}</span>

            <button className="button is-small is-info is-light mx-5"  >
              {/* onClick={upVoteChangeHandle} */}
              Upvote
            </button>
            <button className="button is-small is-info is-light" onClick={() => handleShowCommentsButton(postData._id)}>

              {newCommentState.length > 0 ?
                `Show ${_.size(newCommentState)} Comments`
                : 'Comment first'
              }
            </button>



            <div className={hiddenCommentsNumber.includes(postData._id) ? null : `is-hidden`}>

              {newCommentState
                ? newCommentState.map((comment, index) =>
                  <div key={index}>
                    <CommentElement {...comment} />
                    <div className="level-right" >
                      <button className="button is-small is-info is-light mx-1" >
                        Edit
                      </button>
                      <button className="button is-small is-warning is-light mx-1" >
                        Delete
                      </button>
                    </div>
                  </div>

                ) : null}
              {/* {newCommentState !== null ? <CommentElement {...newCommentState} /> : null} */}

              <br />
              <NewComment postIDprop={postData._id} setNewState={setNewState} />
            </div>
          </div>
          {/* <h5>Upvotes: {postData.likedBy.length}</h5> */}
        </div>
      </div>
    </section>
  )
}
