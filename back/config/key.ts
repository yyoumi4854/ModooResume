import { prod } from "./prod";
import { dev } from "./dev";

// true: 배포한 후, false: 로컬 환경
export const config = process.env.NODE_ENV === "production" ? prod : dev;
