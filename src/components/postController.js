import PostModel from "../models/postModel.js"

async function getPosts(req, res) {
  try {
    const allPosts = await PostModel.find().sort({ createdAt: -1 }) //sorts all posts before sending them back ... newest on top
    res.status(200).json(allPosts)
    // console.log(req);
  } catch (e) {
    res.status(500).json({ Message: "Error: There has been a problem with the request." })
  }
}

async function createPost(req, res) {
  try {


    const newPostToAdd = req.body
    // newPostToAdd.user = req.currentUser
    const createPost = await PostModel.create(newPostToAdd)
    res.status(201).json(createPost)
  } catch (e) {
    res.status(422).json({ Message: "Error: Post missing or invalid fields." })
  }
}

async function getPostByID(req, res) {
  try {
    const postID = req.params.postID
    const post = await PostModel.findById(postID)
    if (!post) return res.json({ Message: "Error: This post in unavailable." })
    res.json(post)
  } catch (e) {
    res.json({ Message: 'Error: This post is unavailable.' })
  }
}

async function removePost(req, res) {
  try {
    const postID = req.params.postID
    // const user = req.currentUser
    const postToBeDeleted = await PostModel.findById(postID)

    // if (!postToBeDeleted.user.equals(user._id)) {
    //   return res.json({ message: 'Unauthorized' })
    // }
    if (!postToBeDeleted) return res.json({ message: "This post cannot be found" })

    await PostModel.findByIdAndDelete(postID)
    res.status(204)

  } catch (e) {
    res.status(422).json({ message: "This Post ID is in an invalid format." })
  }
}



// updatePostById,
// getPostbySearch,

export default {
  getPosts,
  createPost,
  getPostByID,
  removePost,
}

