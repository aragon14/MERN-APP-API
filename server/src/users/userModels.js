import mongoose, { Schema, model } from "mongoose";
import { hash, verify } from "./utils";

const secret = process.env.SECRET || "53cr3t";

const UserSchema = new Schema({
  username: {
    type: String,
    required: true,
    unique: true,
    index: true,
  },
  password: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  createAt: {
    type: Date,
    required: true,
    default: Date.now,
  },
});

UserSchema.pre("save", (next) => {
  const user = this;
  if (!user.isModified("password")) return next();
  hash(user.password)
    .then((hash) => {
      user.password = hash;
      next();
    })
    .catch((err) => next(err));
});

UserSchema.methods.comparePassword = function (candidatePassword, cb) {
  verify(candidatePassword, this.password, (err, isMatch) => {
    if (err) return next(err);
    next(null, isMatch);
  });
};
export default model("users", UserSchema);
