import dotenv from "dotenv";
import path from "path";
import { getOsEnv, getOsEnvOptional, toBool, toNumber } from "./lib/env.utils";

/**
 * Load .env file or tests the .env.test file
 */
dotenv.config({
  path: path.join(
    process.cwd(),
    `.env${process.env.NODE_ENV === "test" ? ".test" : ""}`
  ),
});

/**
 * Enviroment variables
 */
export const env = {
  node: process.env.NODE_ENV || "development",
  isProduction: process.env.NODE_ENV === "production",
  isTest: process.env.NODE_ENV === "test",
  isDevelopment: process.env.NODE_ENV === "development",
  db: {
    type: getOsEnv("TYPEORM_CONNECTION"),
    host: getOsEnvOptional("TYPEORM_HOST"),
    port: toNumber(getOsEnvOptional("TYPEORM_PORT")),
    username: getOsEnvOptional("TYPEORM_USERNAME"),
    password: getOsEnvOptional("TYPEORM_PASSWORD"),
    database: getOsEnv("TYPEORM_DATABASE"),
    synchronize: toBool(getOsEnvOptional("TYPEORM_SYNCHRONIZE")),
  },
};
