import express from "express";
import bodyParser from "body-parser";
import cookieParser from "cookie-parser";

import { User } from "./models/User";
import { config } from "./config/key";
import { auth } from "./middleware/auth";

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cookieParser()); // 쿠키파서 사용 가능

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
app.post("/api/users/register", async (req, res) => {
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

app.post("/api/users/login", (req, res) => {
  const { email, password } = req.body;

  // 1. 요청된 이메일을 DB에 있는지 찾기
  User.findOne({ email: email })
    .then((user: any) => {
      if (!user) {
        return res.json({
          loginSuccess: false,
          message: "email을 다시 확인하세요.",
        });
      }

      // 2. 요청된 이메일이 DB에 있다면 비밀번호가 맞는 비밀번호 인지 확인
      user.comparePassword(password, (err: "empty", isMatch: boolean) => {
        if (!isMatch)
          return res.json({
            loginSuccess: false,
            message: "비밀번호가 틀렸습니다",
          });

        // 3. 비밀번호가 같다면 Token 생성
        user.generateToken((err: "empty", user: any) => {
          if (err) return res.status(400).send(err);

          // 4. 생성된 토큰을 쿠키에 저장
          res
            .cookie("hasVisited", user.token)
            .status(200)
            .json({ loginSuccess: true, userId: user._id });
        });
      });
    })
    .catch((err) => {
      return res.status(400).send(err);
    });
});

app.get("/api/users/auth", auth, (req: any, res) => {
  // 여기까지 미들웨어를 통과해 왔다는 얘기는 Authentication이 True라는 말
  res.status(200).json({
    _id: req.user._id,
    isAdmin: req.user.role === 0 ? false : true,
    isAuth: true,
    email: req.user.email,
    name: req.user.name,
    lastname: req.user.lastname,
    role: req.user.role,
    image: req.user.image,
  });
});

app.get("/api/users/logout", auth, (req: any, res) => {
  // 로그아웃 하려는 유저를 데이터베이스에서 찾아서 데이터를 업데이트
  User.findOneAndUpdate({ _id: req.user._id }, { token: "" })
    .then(() => {
      return res.status(200).send({
        success: true,
      });
    })
    .catch((err: "empty") => {
      return res.json({ success: false, err });
    });
});

app.listen(5000, () => {
  console.log("server is running!");
});
