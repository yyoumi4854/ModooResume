import { Schema, model, Model } from "mongoose";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

const saltRounds = 10;

const userSchema = new Schema({
  name: {
    type: String,
    maxlength: 50,
  },
  email: {
    type: String,
    trim: true,
    unique: 1,
  },
  password: {
    type: String,
    minlength: 5,
  },
  lastname: {
    type: String,
    maxlength: 50,
  },
  role: {
    type: Number,
    default: 0,
  },
  image: String,
  token: {
    type: String,
  },
  tokenExp: {
    type: Number,
  },
});

userSchema.pre("save", function (next) {
  const user = this;

  // 비밀번호를 변환될때만 bcrypt발동
  if (user.isModified("password")) {
    // 비밀번호를 암호화 시킨다.
    bcrypt.genSalt(saltRounds, function (err, salt) {
      if (err) return next(err);

      if (!user.password) return null;
      bcrypt.hash(user.password, salt, function (err, hash) {
        if (err) return next(err);
        user.password = hash;
        next();
      });
    });
  } else {
    next();
  }
});

userSchema.methods.comparePassword = function (plainPassword: string, cb: any) {
  bcrypt.compare(plainPassword, this.password, function (err, isMatch) {
    if (err) return cb(err);
    cb(null, isMatch);
  });
};

userSchema.methods.generateToken = function (cb: any) {
  const user = this;
  // jsonwebtoken을 사용해서 토큰 생성
  const token = jwt.sign(user._id.toHexString(), "createToken");

  user.token = token;
  user
    .save()
    .then(() => {
      cb(null, user);
    })
    .catch((err: "empty") => {
      return cb();
    });
};

export const User = model("User", userSchema);
