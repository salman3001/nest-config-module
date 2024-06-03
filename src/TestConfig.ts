import { IConfig } from './interfaces/IConfig';

export class TestConfig implements IConfig {
  envs() {
    return {
      NAME: process.env.NAME as string,
    };
  }

  profesion = 'Web developer';
  job = 'full time';
}
