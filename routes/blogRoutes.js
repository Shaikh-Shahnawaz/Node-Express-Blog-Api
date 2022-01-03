const express = require('express')
const { addPost,showPosts, updatePost, deletePost } = require('../controllers/blogController')
const { verifyToken } = require('../middlewares/verifyToken')

const router = express.Router()


router.get('/',showPosts)

// this is for authenticate the user

router.use(verifyToken)


router.post('/addpost',addPost)

router.put('/updatepost',updatePost)

router.delete('/deletepost/:id',deletePost)


module.exports = router