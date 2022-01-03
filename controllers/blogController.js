const blog = require("../models/blogModel")


exports.showPosts = async (req,res)=>{

    try {
        const data = await blog.find()
        res.json({message:'Data Fetched', data:data})
    } catch (error) {
        throw new Error(error)
    }
 

}
exports.addPost = async (req,res,next)=>{

    try {
        const data = await blog.create(req.body)
        res.json({message:'Post Created !!', data:data})
    } catch (error) {
       next(error)
    }
 

}

exports.updatePost = async (req,res)=>{
  
console.log('==',req.body)
    try {
        const query = {};
        for(i in req.body){
            if(req.body[i]){
                query[i] = req.body[i]
            }
        }
        const data = await blog.updateOne({_id:req.body._id},{$set:query})
        res.json({message:'Post Updated !!',data:data})
    } catch (error) {
        throw new Error(error)
    }
}

exports.deletePost = async (req,res)=>{

    try {
        const data = await blog.deleteOne({_id:req.params.id})
        res.json({message:'Post Deleted !!',data:data})
    } catch (error) {
        throw new Error(error)
    }
}