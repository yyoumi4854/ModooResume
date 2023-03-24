import express from "express";
const app = express();
const port = 5000;

const mongoose = require("mongoose");
mongoose
  .connect(
    "mongodb+srv://minji:abcd1234@modooresume.eodr2fw.mongodb.net/?retryWrites=true&w=majority",
    {
      // 이걸 안쓰면 에러가 발생
      useNewUrlParser: true,
      useUnifiedTopology: true,
      // useCreateIndex: true,
      // useFindAndModify: false,
      // MongoParseError: usecreateindex, usefindandmodify 옵션은 지원되지 않습니다
    }
  )
  .then(() => console.log("MongoDB Connected..."))
  .catch((err: "empty") => console.log(err));
app.get("/", function (req, res) {
  res.send("Hello World 바뀌나???");
});

app.listen(port, () => {
  console.log("server is running!");
});
