const Blog = require("../models/blog.model")
module.exports.addBlog = async (req,res) => {
    const blogDetails = req.body.data;
    const blog = new Blog(blogDetails);
    blog.save();
    res.status(200).send("ok");
};

module.exports.allBlogs = async (req,res) => {
    const blogs = await Blog.find();
    res.status(200).send(blogs);
};

module.exports.oneBlog = async (req,res) => {
     const blog = await Blog.findOne(req.body);
     res.status(200).send(blog);
}

module.exports.editBlog = async (req,res) => {
    try {
        await Blog.findOneAndUpdate({_id:req.body._id},req.body.updatedBlog);
        res.status(200).send("ok");
    } catch (error) {
        res.status(400).send("Error");
    }
}