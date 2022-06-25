import React from "react"
// import { Link } from "react-router-dom"

export default function CommentElement(comment) {
  // const user = localStorage.getItem('user')

  console.log(comment._id, comment, comment.createdAt, comment.content);

  return (
    <article className="card my-5 mx-5">
      <div key={comment._id + 0}> {/* double keys due to mapping so adding 'salt' with 0 to avoid conflict when rendering */}
        {/* <Link to={`/users/${comment.owner._id}`}> */}
        {/* <h6>{comment.user.username} </h6> */}
        {/* </Link> */}

        {/* <figure className="media-left">
          <p>
            <img />
          </p>
        </figure> */}
        <div className="card-content">
          <div className="content">
            <p><strong>{comment.user ? comment.user : 'Username missing'}:</strong> <br />
              <small className="level-right"> at {comment.createdAt}</small>

              {comment.content}</p>
            {/* <p>{comment.likedBy.length} upvotes</p> */}
          </div>

          <div className="level-right" >
            <button className="button is-rounded is-small is-info is-light mx-1 my-1" >
              Edit
            </button>
            <button className="button is-rounded is-small is-warning is-light mx-1 my-1" >
              Delete
            </button>
          </div>
          <button className="button is-rounded is-small is-info is-light mx-3"  >
            {/* onClick={upVoteChangeHandle} */}
            Upvote
          </button>
        </div>

      </div>
    </article>
  )
}
