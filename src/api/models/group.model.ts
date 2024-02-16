import mongoose, { Schema } from "mongoose";

const groupCollection = "group";

const groupSchema = new mongoose.Schema({
  groupName: { type: String, required: true },
  userIdOwner: { type: Schema.Types.ObjectId, ref: "user", required: true },
});

const groupModel = mongoose.model(groupCollection, groupSchema);

export default groupModel;
