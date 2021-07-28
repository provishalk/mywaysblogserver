const express = require("express");
const app = express();
const port = process.env.PORT || 8080 ;
const cors = require("cors");
const mongoose = require("mongoose");

// Routes
const blogRoute = require("./src/routes/blog.router");
const userRoute = require("./src/routes/user.router")
// const feedbackRoute = require("./src/routes/feedback.router");
// const adminRoute = require("./src/routes/admin.router");

// Database connection
mongoose.connect(
  "mongodb+srv://vishal:12345@cluster0.nqdbc.mongodb.net/MyWaysBlogs?retryWrites=true&w=majority",
  { useNewUrlParser: true, useUnifiedTopology: true }
);

app.use(express.json());
app.use(
  express.urlencoded({
    extended: true,
  })
);

// Enable CORS
app.use(cors());

// Register Router
app.use("/api/blog", blogRoute);
app.use("/api/user",userRoute);
// app.use("/api/feedback", feedbackRoute);
// app.use("/api/admin", adminRoute);
app.get('/', (req, res) => {
  res.send("Success")
})

// Start Server
app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
  })