import mongoose from "mongoose";

const userCollection = "user";

const userSchema = new mongoose.Schema({
  username: { type: String, required: true, unique: true },
  email: { type: String, required: true, unique: true },
  password: { type: String },
  points: { type: Number },
  createTime: { type: Date },
});

const userModel = mongoose.model(userCollection, userSchema);

export default userModel;
