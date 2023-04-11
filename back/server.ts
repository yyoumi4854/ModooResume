import express from "express";
const mongoose = require("mongoose");
import bodyParser from "body-parser";
import cookieParser from "cookie-parser";
import cors from "cors";

import { config } from "./config/key";
import userRouter from "./src/router/userRouter";

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cookieParser()); // 쿠키파서 사용 가능
app.use(cors());

// 라우터
app.use("/api/users", userRouter);

mongoose
  .connect(config.mongoURI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("MongoDB Connected..."))
  .catch((err: "empty") => console.log(err));

app.get("/", function (req, res) {
  res.send("모두의 이력서 서버입니다~");
});

app.listen(5000, () => {
  console.log("server is running!");
});
