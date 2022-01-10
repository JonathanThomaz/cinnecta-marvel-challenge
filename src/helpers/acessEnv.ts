// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function accessEnv<T = any>(key: string, defaultValue?: T): T {
  const envValue = process.env[key];
  if (!envValue) {
    if (!defaultValue) {
      throw new Error(`Enverioment variable "${key}" not defined`);
    }
    return defaultValue;
  }
  return envValue as unknown as T;
}
