const express = require('express')
const { addPost,showPosts, updatePost, deletePost } = require('../controllers/blogController')
const { authenticate } = require('../middlewares/tokenCheck')

const router = express.Router()


router.get('/',showPosts)

// this is for authenticate the user

// router.use(authenticate)

router.post('/addpost',addPost)

router.put('/updatepost',updatePost)

router.delete('/deletepost/:id',deletePost)


module.exports = router