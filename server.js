const express = require("express");
const cors = require("cors");
const path = require("path");
require("dotenv").config();
const app = express();
const mongoose = require("mongoose");

app.use(express.json());
app.use(cors());
app.get("/", (req, res) => {
  res.send("Hello World!");
});

const URI = process.env.MONGODB_URL;

app.use(require("./routes/userRoutes"));

mongoose.connect(
  URI,
  {
    useCreateIndex: true,
    useFindAndModify: false,
    useNewUrlParser: true,
    useUnifiedTopology: true,
  },
  err => {
    if (err) throw err;
    console.log("Connected to MongoDB");
  }
);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log("Server is running on port", PORT);
});
