import { atom } from "recoil";
import { recoilPersist } from "recoil-persist";

const { persistAtom } = recoilPersist();
// 페이지가 변경되더라도 상태관리를 유지하기 위해 사용된다.

interface User {
  id: string;
  nickName: string;
}

export const userAtom = atom<User | null>({
  key: "USER_DATA",
  default: null,
  effects_UNSTABLE: [persistAtom],
});
