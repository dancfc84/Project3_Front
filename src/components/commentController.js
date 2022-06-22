// ! Controller just for comments.
import PostModel from '../models/postModel.js'
import UserModel from '../models/userModel.js'

async function commentOnPost(req, res) {
  try {
    const postID = req.params.postID
    // ! We also need to get the user/user ID for the user commenting.
    // const user = req.currentUser
    const comment = req.body

    const postData = await PostModel.findById(postID)

    // ! Handle it if no post is found
    if (!postData) {
      return res.json({ message: 'No such post has been found' })
    }
    // ! Push the new comment to the comments array
    // comment.user = user

    // ! Pushing our new comment to this post does
    // ! NOT update it in the database YET. 
    postData.userComments.push(comment)

    // ! So we need to save it to the database.
    const savedPost = await postData.save()
    // ! Sending back the comment
    res.json(savedPost)
  } catch (e) {
    console.log(e)
    res.json({ message: "There was a problem posting this comment." })
  }
}

export default {
  commentOnPost,
}