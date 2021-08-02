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

// {
//     "blogId": "61004963ed77bb33bc364f12",
//     "comments":
//         {
//             "userId": "String",
//             "userName": "String",
//             "comment": "GoodBlogg"
//         }
// }