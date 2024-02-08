import { Command } from "commander";

export function getOsEnv(key: string): string {
  if (typeof process.env[key] === "undefined") {
    throw new Error(`Enviroment variable ${key} is not set.`);
  }

  return process.env[key] as string;
}

export function getOsEnvOptional(key: string): string | undefined {
  return process.env[key];
}

export function toNumber(value: string): number {
  return parseInt(value, 10);
}

export function toBool(value: string): boolean {
  return value === "true";
}

export const program = new Command();

program
  .name("bookify-backend")
  .description("CLI to start up the backend services")
  .version("1.0.0");

program
  .option("-p <port>", "Server port", "8080")
  .option("--mode <mode>", "Enviroment", "dev")
  .option("-u <user>", "Logged user", "No user is logged");

program.parse();

process.on("exit", (code) => {
  console.log("Exit code process: " + code);
});

/* COMMENT THIS LINE IN DEV MODE */
process.on("uncaughtException", (exception) => {
  console.log("Something went wrong! Unhandled exception: " + exception);
});
