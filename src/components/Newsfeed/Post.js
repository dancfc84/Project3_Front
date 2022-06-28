import React from "react"
import { Link } from "react-router-dom"
// import _ from 'lodash'
// import NewComment from "./NewComment"
// import CommentElement from "./Comment"
import axios from "axios"
import { isCreator } from '../../lib/auth.js'


export default function PostElement(singlePostDataProp) {

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
  return <div className="card">

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
          {isCreator(singlePostDataProp.user._id) && <div className="level-right" >
            <Link to={`/postedit/${singlePostDataProp._id}`}>
              <button className="button is-rounded is-small is-info is-light mx-1" >
                Edit </button>
            </Link>

            <button className="button is-rounded is-small is-warning is-light mx-1" onClick={deletePostHandle} >
              Delete </button>
          </div>
          }
        </div>
      </div>
    </div>
  </div >
}
