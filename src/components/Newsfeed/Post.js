import React from "react"
import { Link } from "react-router-dom"
import _ from 'lodash'
// import NewComment from "./NewComment"
// import CommentElement from "./Comment"
import axios from "axios"
import { isCreator, getLoggedInUserId } from '../../lib/auth.js'


export default function PostElement(singlePostDataProp) {
  const [commentContent, setCommentContent] = React.useState('')
  // const [post, setPost] = React.useState(singlePostDataProp)

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
        {
          headers: { Authorization: `Bearer ${localStorage.getItem('token')}` },
        }
      )
      if (deletePost.status === 204) {
        singlePostDataProp.getPostData()
      }
    } catch (e) {
      console.log(e)
    }
  }


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

  return <div className="card my-3">

    <div className="section">
      <div className="container">
        <div className="box mb-5">
          <p className="title is-4">{singlePostDataProp.user.username ? singlePostDataProp.user.username : "Unknown user posted"}:</p>
          
          <div className="is-grouped">
            <p className="tags level-right">{singlePostDataProp.postContent}</p>
            {singlePostDataProp.tags.map((tag, index) => {
              return <div key={index} className="tag is-link mx-1 is-light">
                {tag}
              </div>
            })}
          </div>

          <div className="tags level-right">
            {singlePostDataProp.upvotedBy.map((tag, index) => {
              return <div key={index} className="tag is-link mx-1 is-light">
                {tag}
              </div>
            })}
          </div>

          {singlePostDataProp.downvotedBy.map((tag, index) => {
            return <div key={index} className="tag is-link mx-1 is-light">
              {tag}
            </div>
          })}

          {<p className="">{singlePostDataProp.createdAt.replace('T', ' - ').slice(0, - 8)}</p>}

          {<p className="">{singlePostDataProp.updatedAt.replace('T', ' - ').slice(0, - 8)}</p>}

          {/* {edit and delte buttons if creator} */}
          {isCreator(singlePostDataProp.user._id) && <div className="level-right" >
            <Link to={`/postedit/${singlePostDataProp._id}`}>
              <button className="button is-rounded is-small is-info is-light mx-1" >
                Edit </button>
            </Link>
            <button className="button is-rounded is-small is-warning is-light mx-1" onClick={deletePostHandle} >
              Delete </button>
          </div>
          }

          <button className="button is-rounded is-small is-info is-light" onClick={
            () => handleShowCommentsButton(singlePostDataProp._id)}>

            {singlePostDataProp.userComments.length > 0 ?
              `Show ${_.size(singlePostDataProp.userComments)} Comments`
              : 'Comment'
            }
          </button>

          <div className={hiddenCommentsNumber.includes(singlePostDataProp._id) ? null : `is-hidden`}>
            {singlePostDataProp.userComments ? singlePostDataProp.userComments.map(comment => {
              return <article key={comment._id} className="media">
                <div className="media-content">
                  <div className="content">
                    <p className="subtitle">
                      {comment.createdAt.replace('T', ' - ').slice(0, - 8)}
                    </p>
                    <p className="subtitle">
                      {comment.user && comment.user.username}
                    </p>
                    <p>{comment.content}</p>
                  </div>
                </div>
              </article>
            }) : <p>Loading comments </p>}

            {getLoggedInUserId() && <article className="media">
              <div className="media-content">
                <div className="field">
                  <p className="control">
                    <textarea
                      className="textarea"
                      placeholder="Make a comment.."
                      onChange={(event) => setCommentContent(event.target.value)}
                    >
                    </textarea>
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
    </div>
  </div >
}
