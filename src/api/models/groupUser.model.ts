import mongoose, { Schema } from "mongoose";

const groupUserCollection = "group_user";

const groupUserSchema = new mongoose.Schema({
  userId: { type: Schema.Types.ObjectId, ref: "user", required: true },
  groupId: { type: Schema.Types.ObjectId, ref: "group", required: true },
  role: { type: String, required: true },
});

const groupUserModel = mongoose.model(groupUserCollection, groupUserSchema);

export default groupUserModel;
