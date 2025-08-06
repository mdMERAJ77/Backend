<<<<<<< HEAD
const express =require('express');
const authRoutes =require('./routes/auth.routes');
const cookieParser =require('cookie-parser')
const postRoutes = require('./routes/post.routes');




const app = express();
app.use(express.json())
app.use(cookieParser())


app.use('/api/auth' ,authRoutes)
app.use('/api/posts',postRoutes)


module.exports =app;
=======
const express = require("express");

const noteRoutes = require("./routes/note.routes");
const app = express();
app.use(express.json());
app.use("/api", noteRoutes);

module.exports = app;
>>>>>>> c5ae6eb0337d74a27e1cd6909567ddab502e1d80
