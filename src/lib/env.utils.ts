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
