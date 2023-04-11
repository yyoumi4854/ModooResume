const { User } = require("../models/User");

export const auth = (req: any, res: any, next: any) => {
  // 인증 처리 하는 곳

  // 1.클라이언트 쿠키에서 토큰 가져오기
  const token = req.cookies.hasVisited;

  // 2.토큰을 복호화 한후 일치하는 유저 찾기
  User.findByToken(token, (err: any, user: any) => {
    // 3.유저가 없으면 인증 No!
    if (err) throw err;
    if (!user) return res.json({ isAuth: false, error: true }); // 클라이언트에게 전달

    // 4.유저가 있으면 인증 OKay!
    req.token = token;
    req.user = user;
    next(); // server.ts auth 미들웨어가 갈 수 있게 next를 안쓰면 미들웨어에 갇혀버린다.
  });
};
