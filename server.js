<<<<<<< HEAD
require('dotenv').config()
const app = require('./src/app');
const connectDB = require('./src/db/db');

connectDB()

app.listen(3000,()=>{
    console.log("✅ Server is running on port 3000");
});

=======
require("dotenv").config();
const connectDB = require("./src/db/db");
const app = require("./src/app");

connectDB();
app.listen(3000, () => {
  console.log("✅ Server is running on port 3000");
});
>>>>>>> c5ae6eb0337d74a27e1cd6909567ddab502e1d80
