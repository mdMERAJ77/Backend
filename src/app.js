const express = require("express");

const noteRoutes = require("./routes/note.routes");
const app = express();
app.use(express.json());
app.use("/api", noteRoutes);

module.exports = app;
