import React from "react"
import { Link } from "react-router-dom"
// import _ from 'lodash'
// import NewComment from "./NewComment"
// import CommentElement from "./Comment"
// import axios from "axios"
// import { isCreator } from '../../lib/auth'


export default function PostElement(singlePostDataProp) {
  return <Link to={`/post/${singlePostDataProp._id}`}>
    <div className="card">

      <div className="card-content">
        <div className="media">
          <div className="media-content">
            <p className="title is-4">{singlePostDataProp.user.username}</p>
            <p className="">{singlePostDataProp.postContent}</p>
            {singlePostDataProp.tags.map((tag, index) => {
              return <div key={index} className="tag is-link mx-1 is-light">
                {tag}
              </div>
            })}

            {singlePostDataProp.upvotedBy.map((tag, index) => {
              return <div key={index} className="tag is-link mx-1 is-light">
                {tag}
              </div>
            })}
            {singlePostDataProp.downvotedBy.map((tag, index) => {
              return <div key={index} className="tag is-link mx-1 is-light">
                {tag}
              </div>
            })}
            {<p className="">{singlePostDataProp.createdAt}</p>}
            {<p className="">{singlePostDataProp.updatedAt}</p>}
          </div>
        </div>
      </div>
    </div>
  </Link>
}
