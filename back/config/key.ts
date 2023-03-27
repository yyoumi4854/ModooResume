if (process.env.NODE_ENV === "production") {
  // 배포 한후
  module.exports = require("./prod");
} else {
  // 로컬 환경
  module.exports = require("./dev");
}
