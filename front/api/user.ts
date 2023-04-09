// 인스턴스를 import해서 api를 호출하는 함수를 모아 높는 파일
import instance from ".";

export const login = async ({
  email,
  password,
}: {
  email: string;
  password: string;
}) => {
  const result = await instance.post("/users/login", {
    email,
    password,
  });

  return result;
};
