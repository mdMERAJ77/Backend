require("dotenv").config();
const connectDB = require("./src/db/db");
const app = require("./src/app");

connectDB();
app.listen(3000, () => {
  console.log("✅ Server is running on port 3000");
});
