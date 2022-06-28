import React from "react"
import { Link } from "react-router-dom"
// import _ from 'lodash'
// import NewComment from "./NewComment"
// import CommentElement from "./Comment"
import axios from "axios"
import { isCreator } from '../../lib/auth.js'


export default function PostElement(singlePostDataProp) {
  // const [commentContent, setCommentContent] = React.useState('')
  // const [post, setPost] = React.useState(singlePostDataProp)

  //handles post deleting
  async function deletePostHandle() {
    try {
      const deletePost = await axios.delete(`/api/posts/${singlePostDataProp._id}`,
        {
          headers: { Authorization: `Bearer ${localStorage.getItem('token')}` },
        }
      )
      if (deletePost.status === 204) {
        singlePostDataProp.updatePostsOnDelete(singlePostDataProp._id)
      }
    } catch (e) {
      console.log(e)
    }
  }

  // async function handleComment() {
  //   try {
  //     const { data } = await axios.post(
  //       `/api/posts/${post._id}/comment`,
  //       { content: commentContent },
  //       {
  //         headers: { Authorization: `Bearer ${localStorage.getItem('token')}` },
  //       }
  //     )
  //     setPost(data)
  //   } catch (e) {
  //     console.log(e)
  //   }
  // }

  return <div className="card my-3">

    <div className="card-content">
      <div className="media">
        <div className="media-content">
          <p className="title is-4">{singlePostDataProp.user.username}:</p>
          <p className="">{singlePostDataProp.postContent}</p>
          {singlePostDataProp.tags.map((tag, index) => {
            return <div key={index} className="tag is-link mx-1 is-light">
              {tag}
            </div>
          })}
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

          {/* {getLoggedInUserId() && <article className="media">
            <div className="media-content">
              <div className="field">
                <p className="control">
                  <textarea
                    className="textarea"
                    placeholder="Make a comment.."
                    // ! Set the comment's content to be what's in the input textarea.
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
          </article>} */}
        </div>
      </div>
    </div>
  </div >
}
