require("dotenv").config();
const express = require("express");
const cors = require("cors");
const connectDB = require("./config/db");
const path = require("path");
const cookieParser = require("cookie-parser");
const PORT = process.env.PORT || 8000;
const app = express();

const authRouter = require("./routes/user");
const usersRouter = require("./routes/user");
const checkListRouter = require("./routes/checkList");
const checkListTemplateRouter = require("./routes/checkListTemplate");

const errorHandler = require("./middlewares/errorHandler");

app.use(cors({ origin: process.env.FRONTEND_URL, credentials: true }));
app.use(express.json());
app.use(cookieParser());
app.use("/auth", authRouter);
app.use("/api/user", usersRouter);
app.use("/api/checkList", checkListRouter);
app.use("/api/checkListTemplate", checkListTemplateRouter);

// errorHandler is middleware for all routes
app.use(errorHandler);

/* joining and normalizing paths for deployment */
if (process.env.NODE_ENV === "production") {
  const buildPath = path.join(__dirname, "../client/build");

  // Serve static files from the build folder
  app.use(express.static(buildPath));

  // Serve the index.html file if a route is not found
  app.get("*", (req, res) => {
    res.sendFile(path.join(buildPath, "index.html"));
  });
}

// about page
app.get("/about", (req, res) => {
  res.sendFile(path.join(__dirname, "client/build", "index.html"));
});

//const db = mongoose.connection;
// db.on("error", (error) => console.error(error));
// db.once("open", () => console.log("Connected to MongoDB"));

connectDB().then(() => {
  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });
});
