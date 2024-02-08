import mongoose from "mongoose";
import { configEnv } from "../api/configs/env.config";

const DB_USER = configEnv.DB_USER;
const DB_PASSWORD = configEnv.DB_PASS;
const DB_NAME = configEnv.DB_NAME;
const DB_CLUSTER = configEnv.DB_CLUSTER;

const URL_MONGO = `mongodb+srv://${DB_USER}:${DB_PASSWORD}@${DB_CLUSTER}/${DB_NAME}?retryWrites=true&w=majority`;

const connectDB = async () => {
  await mongoose.connect(URL_MONGO).then(() => {
    console.log("[Server]: Database connected.");
  });
};

export default connectDB;
