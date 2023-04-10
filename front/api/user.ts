// 인스턴스를 import해서 api를 호출하는 함수를 모아 높는 파일
import instance from ".";

interface User {
  email: string;
  nickName: string;
  password: string;
}

// 로그인
export const login = async ({ email, password }: Omit<User, "nickName">) => {
  const result = await instance.post("/users/login", {
    email,
    password,
  });

  return result;
};

// 회원가입
export const register = async ({ email, nickName, password }: User) => {
  const result = await instance.post("/users/register", {
    email,
    nickName,
    password,
  });

  return result;
};
