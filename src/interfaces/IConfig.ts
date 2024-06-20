export interface IConfig {
  envs(): Record<string, string | number | boolean>;
}
