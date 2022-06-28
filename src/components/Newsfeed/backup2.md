<!-- // import React from "react"
// import { Link } from "react-router-dom"
// import _ from 'lodash'
// import NewComment from "./NewComment"
// import CommentElement from "./Comment"
// import axios from "axios"
// import { isCreator } from '../../lib/auth'


// export default function PostElement(postData) {
//   // const [upvotedBy, setUpvotedBy] = React.useState(postData.upvotedBy)
//   const [hiddenCommentsNumber, setHiddenCommentsNumber] = React.useState([]) //used to keep track of which posts have show comments clicked on to show comments
//   const [post, setPost] = React.useState(postData)

//   React.useEffect(() => {
//     fetch(`/api/posts/${post._id}`)
//       .then(resp => resp.json())
//       .then(data => setPost(data))
//   }, [post._id])


//   //handles Show Comments button
//   function handleShowCommentsButton(postID) {
//     hiddenCommentsNumber.includes(postID)
//       ? setHiddenCommentsNumber(_.remove(hiddenCommentsNumber, (postCheck) => postCheck._id !== postID._id))
//       : setHiddenCommentsNumber([...hiddenCommentsNumber, postID])
//   }


//   //handles post deleting
//   async function deletePostHandle() {
//     try {
//       const deletePost = await axios.delete(`/api/posts/${postData._id}`,
//         {
//           headers: { Authorization: `Bearer ${localStorage.getItem('token')}` },
//         }
//       )
//       if (deletePost.status === 204) {
//         postData.updatePostsOnDelete(postData._id)
//       }
//     } catch (e) {
//       console.log(e)
//     }
//   }

//   // function upVoteChangeHandle(e) {
//   //   setUpvotedBy({
//   //     ...upvotedBy,
//   //     upvotedBy: [e.target.value],
//   //   })
//   //   console.log(upvotedBy);
//   //   handleVoteUpdateToDB(e)
//   // }

//   // async function handleVoteUpdateToDB(e) {
//   //   e.preventDefault()
//   //   try {
//   //     const { data } = await axios.put(`/api/posts/${postData._id}`, upvotedBy)
//   //     console.log(data);
//   //   } catch (err) {
//   //     console.log(err.response.data);
//   //   }
//   // }


//   return (
//     <section className="section">
//       <div className="container">
//         <div key={post._id + 0} className=" box mb-5">
//           <div className="content">
//             <h4 className="header">  {post.username ? post.username : "User posted"}:
//             </h4>


//             <div className="is-grouped">
//               <p className="content ">
//                 {post.postContent}
//               </p>
//             </div>

//             <p className="level-right">
//               posted <br />
//               {post.createdAt}</p>
//             {post.tags.length > 0 &&
//               <h5 className="level-right">
//                 Tags:
//               </h5>}


//             <div className="tags level-right">
//               {post.tags.map((tag, index) =>
//                 <span key={index} className="tag is-link mx-1 is-light">
//                   {tag}
//                 </span>)} <br />
//             </div>


//             {isCreator(post.username) && <div className="level-right" >
//               <Link to={`/postedit/${post._id}`}>
//                 <button className="button is-rounded is-small is-info is-light mx-1" >
//                   Edit </button>
//               </Link>

//               <button className="button is-rounded is-small is-warning is-light mx-1" onClick={deletePostHandle} >
//                 Delete </button>
//             </div>
//             }

//             <button className="button is-rounded is-small is-info is-light mx-3"  >
//               Upvote
//             </button>
//             <button className="button is-rounded is-small is-info is-light" onClick={
//               () => handleShowCommentsButton(post._id)}>

//               {post.userComments.length > 0 ?
//                 `Show ${_.size(post.userComments)} Comments`
//                 : 'Comment'
//               }
//             </button>

//             <div className={hiddenCommentsNumber.includes(post._id) ? null : `is-hidden`}>
//               {post.userComments && post.userComments.map((comment) => {
//                 return <div key={comment._id}>
//                   <CommentElement {...comment} PostIDProp={post._id} />
//                 </div>
//               })}
//               <br />
//               <NewComment postIDprop={post._id} setPost={setPost} />
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   )
// } -->
