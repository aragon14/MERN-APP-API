import mongoose from "mongoose";
import userRouter from "./userModels";

export async function getUsers() {
  const users = await User.find().sort("-createAt").exec();
  return users;
}
export async function getUser(username) {
  const user = await User.find({ username }).exec();
  return user;
}
export async function saveUser(user) {
  const userSaved = await User.create(user);
  // if (user) return user.username
  return userSaved;
}
