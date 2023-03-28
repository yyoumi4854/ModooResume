import express from "express";
import bodyParser from "body-parser";

import { User } from "./models/User";
import { config } from "./config/key";

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

const mongoose = require("mongoose");
mongoose
  .connect(config.mongoURI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("MongoDB Connected..."))
  .catch((err: "empty") => console.log(err));

app.get("/", function (req, res) {
  res.send("Hello World");
});

// 회원가입 라우터
app.post("/register", async (req, res) => {
  const user = new User(req.body);

  const result = await user
    .save()
    .then(() => {
      res.status(200).json({
        success: true,
      });
    })
    .catch((err: "empty") => {
      res.json({ success: false, err });
    });

  return result;
});

app.listen(5000, () => {
  console.log("server is running!");
});
