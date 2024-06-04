import { Inject, Injectable } from '@nestjs/common';
import { CONFIG_OPT } from './constants';
import { config as dotEnv } from 'dotenv';
import { IConfigOptions } from './interfaces/IConfigOptions';

@Injectable()
export class ConfigService {
  constructor(
    @Inject(CONFIG_OPT)
    public opt: IConfigOptions,
  ) {
    dotEnv({ path: this.opt.envFile });
    this.varifyEnvs();
  }

  get<T>() {
    return this.opt.config as T;
  }

  private varifyEnvs = () => {
    for (const [ev, value] of Object.entries(this.opt.config.envs())) {
      if (!value) {
        throw new Error(`Environment variable ${ev} must be defined`);
      }
    }
  };
}
