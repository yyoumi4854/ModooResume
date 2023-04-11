import { Router } from "express";

import { User } from "../models/User";
import { auth } from "../middleware/auth";

const userRouter = Router();

// 회원가입
userRouter.post("/register", async (req, res) => {
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

// 로그인
userRouter.post("/login", (req, res) => {
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
            .json({
              loginSuccess: true,
              data: {
                userId: user._id,
                nickName: user.nickName,
              },
            });
        });
      });
    })
    .catch((err) => {
      return res.status(400).send(err);
    });
});

userRouter.get("/auth", auth, (req: any, res) => {
  // 여기까지 미들웨어를 통과해 왔다는 얘기는 Authentication이 True라는 말
  res.status(200).json({
    _id: req.user._id,
    isAuth: true,
    email: req.user.email,
    nickName: req.user.nickName,
    lastname: req.user.lastname,
    image: req.user.image,
  });
});

// 로그아웃
userRouter.get("/logout", auth, (req: any, res) => {
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

export default userRouter;
