require("dotenv").config();
const express = require("express");
const cors = require("cors");
const connectDB = require("./config/db");
const path = require("path");
const PORT = process.env.PORT || 9000;
const app = express();
app.use(cors());
app.use(express.json());

if (process.env.NODE_ENV === "production") {
    const buildpath = path.join(__dirname, "../client/build");
    app.use(express.static(buildpath));
  
    app.get("*", (req, res) => {
      res.sendFile(path.join(buildpath, "index.html"));
    });
  }
  

connectDB().then(() => {
  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });
});
