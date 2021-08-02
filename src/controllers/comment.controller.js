const Comment = require("../models/comment.model");

module.exports.addComment = async (req,res) =>{
    try {
        const data = req.body;
        const isExist = await Comment.findOne({blogId:req.body.blogId});
        const comment = new Comment(data);
        if(!isExist){
            await comment.save();
        }
        else{
            await Comment.updateOne(isExist, { $push: { comments: data.comments } })
        }
        res.send("Comment Added");
    } catch (error) {
        res.send(error);
    }
}
module.exports.getComment = async (req,res) => {
    try {
        const blogId = req.body.blogId;
        const data = await Comment.findOne({blogId}); 
        console.log(blogId);
        res.json(data.comments);
    } catch (error) {
        console.log("error");
        res.status(404).send(error);
    }
}