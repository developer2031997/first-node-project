const express = require("express");

const app = express();
const PORT = 8000;

const { connectMangoDb } = require("./connection");
const userRouter = require("./routes/user");
const { logReqRes } = require("./middlewares");

// connect mangoose
connectMangoDb(
  "mongodb+srv://developer2031997:awh1kbmG8mQa5rT7@cluster0.xbudz9e.mongodb.net/"
);

app.use(express.urlencoded({ extended: false }));

// middlewares
app.use(logReqRes("log.txt"));

// router
app.use("/users",userRouter);

app.listen(PORT, () => console.log("server started."));
