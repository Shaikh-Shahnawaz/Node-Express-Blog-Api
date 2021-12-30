const express = require("express")
const { signupUser,loginUser, showUser } = require("../controllers/authenticationController")
const { middlewareAuthentication } = require("../middlewares/passwordbcrypt")
const router = express.Router()



router.get("/",showUser)
router.post("/signup",middlewareAuthentication,signupUser)
router.post("/login",loginUser)


module.exports = router