import React from "react"
import { Link } from "react-router-dom"
import _ from 'lodash'
// import NewComment from "./NewComment"
// import CommentElement from "./Comment"
import axios from "axios"
import { isCreator, getLoggedInUserId } from '../../lib/auth.js'


export default function PostElement(singlePostDataProp) {
  const [commentContent, setCommentContent] = React.useState('')
  const [newComment, setNewComment] = React.useState(singlePostDataProp.userComments)
  const [hiddenCommentsNumber, setHiddenCommentsNumber] = React.useState([]) //used to keep track of which posts have show comments clicked on to show comments

  console.log(singlePostDataProp);
  //handles Show Comments button
  function handleShowCommentsButton(postID) {
    hiddenCommentsNumber.includes(postID)
      ? setHiddenCommentsNumber(_.remove(hiddenCommentsNumber, (postCheck) => postCheck._id !== postID._id))
      : setHiddenCommentsNumber([...hiddenCommentsNumber, postID])
  }

  //handles post deleting
  async function deletePostHandle() {
    try {
      const deletePost = await axios.delete(`/api/posts/${singlePostDataProp._id}`,
        { headers: { Authorization: `Bearer ${localStorage.getItem('token')}` } }
      )
      if (deletePost.status === 204) {
        singlePostDataProp.setAllUserPosts(singlePostDataProp.allUserPosts.filter((post) =>
          post._id !== singlePostDataProp._id
        ))
        // singlePostDataProp.getPostData()
      }
    } catch (e) {
      console.log(e)
    }
  }

  //handles comment sumbission to backend
  async function handleComment() {
    try {
      const { data } = await axios.post(
        `/api/posts/${singlePostDataProp._id}/comment`,
        { content: commentContent },
        {
          headers: { Authorization: `Bearer ${localStorage.getItem('token')}` },
        }
      )
      singlePostDataProp.getPostData()

      console.log(data);
      setCommentContent('')
    } catch (e) {
      console.log(e)
    }
  }

  //handles comment delete query to backend
  async function deleteComment(commentID) {
    try {
      const deleteThisComment = await axios.delete(
        `/api/posts/${singlePostDataProp._id}/${commentID}`,
        { headers: { Authorization: `Bearer ${localStorage.getItem('token')}` } }
      )
      setNewComment(newComment.filter((comments) =>
        comments._id !== commentID
      ))
      console.log(deleteThisComment);
    } catch (e) {
      console.log(e)
    }
  }



  //submits query to backed for like/upvote
  async function handleUpvote() {
    
    try {
      const { data } = await fetch(`/api/posts/${singlePostDataProp._id}/vote`,
        {
          method: 'POST',
          headers: {
            "Authorization": `Bearer ${localStorage.getItem('token')}`,
          },
        }
      )
      // await axios.put(
      //     `/api/posts/${singlePostDataProp._id}/vote`,
      //     {
      //       headers: { Authorization: `Bearer ${localStorage.getItem('token')}` },
      //     })
      console.log(data);
    } catch (err) {
      console.log(err.response.data);
    }
  }


  return <div className="card my-3">
    <div className="section">
      <div className="container">
        <div className="">
          <p className="title is-4">
            {singlePostDataProp.user.username ? singlePostDataProp.user.username : "Unknown user posted"}:
          </p>
          <small className="">
            posted at {singlePostDataProp.createdAt.replace('T', ' - ').slice(0, - 8)}</small>
          {singlePostDataProp.tags.length > 0 &&
            <h5 className="level-right">
              Tags:
            </h5>}
          <div className="tags level-right">
            {singlePostDataProp.tags.map((tag, index) => {
              return <div key={index} className="tag is-link mx-1 is-light">
                {tag}
              </div>
            })}
          </div>
          <div className="is-grouped">
            <p className="">{singlePostDataProp.postContent}</p>

          </div>

        </div>

        {singlePostDataProp.downvotedBy.map((tag, index) => {
          return <div key={index} className="tag is-link mx-1 is-light">
            {tag}
          </div>
        })}


        {/* {<small className="">{singlePostDataProp.updatedAt.replace('T', ' - ').slice(0, - 8)}</small>} */}

        {/* {edit and delte buttons if creator} */}
        {isCreator(singlePostDataProp.user._id) && <div className="level-right" >
          <Link to={`/postedit/${singlePostDataProp._id}`}>
            <button className="button is-rounded is-small level-right is-info is-light mx-2 my-2" >
              Edit </button>
          </Link>
          <button className="button is-rounded is-small level-right is-warning is-light mx-2 my-2" onClick={deletePostHandle} >
            Delete </button>
        </div>
        }
        {singlePostDataProp.upvotedBy.length > 0
          &&
          <small className="level-right my-2">
            {`Upvoted by ${singlePostDataProp.upvotedBy[0]} and ${singlePostDataProp.upvotedBy.length - 1} others`}
          </small>
        }
        {singlePostDataProp.upvotedBy.length}
        <button className="button is-rounded is-small is-info is-light mx-3" onClick={handleUpvote}  >
          Upvote
        </button>

        <button className="button is-rounded is-small is-info is-light" onClick={
          () => handleShowCommentsButton(singlePostDataProp._id)}>

          {singlePostDataProp.userComments.length > 0 ?
            `Show ${_.size(singlePostDataProp.userComments)} Comments`
            : 'Comment'
          }
        </button>

        <div className={hiddenCommentsNumber.includes(singlePostDataProp._id) ? null : `is-hidden`}>
          {newComment ? newComment.map(comment => {
            return <article key={comment._id} className="media">
              <div className="media-content box my-2">
                <div className="content">
                  <p className="subtitle">
                    {comment.user && comment.user.username}
                  </p><small className="">
                    posted at {singlePostDataProp.createdAt.replace('T', ' - ').slice(0, - 8)}:</small>

                  {isCreator(singlePostDataProp.user._id) && <div className="level-right" >
                    <button className="button is-rounded is-small level-right is-warning is-light mx-2 my-2" onClick={() => deleteComment(comment._id)} >
                      Delete </button>
                  </div>
                  }
                  <p className="my-2">{comment.content}</p>
                </div>
              </div>
            </article>
          }) : <p>Loading comments </p>}
          <br />

          {getLoggedInUserId() && <article className="media">
            <div className="media-content">
              <div className="field">
                <p className="control">
                  <textarea
                    className="textarea"
                    placeholder="Make a comment.."
                    onChange={(event) => setCommentContent(event.target.value)}
                  />

                </p>
              </div>
              <div className="field">
                <p className="control">
                  <button
                    className="button is-info"
                    onClick={handleComment}
                  >
                    Submit
                  </button>
                </p>
              </div>
            </div>
          </article>}
        </div>
      </div>
    </div>
  </div >
}
