import { DynamicModule, Module } from '@nestjs/common';
import { ConfigService } from './config.service';
import { CONFIG_OPT } from './constants';
import { IConfigOptions } from './interfaces/IConfigOptions';

@Module({})
export class ConfigModule {
  static register(opt: IConfigOptions): DynamicModule {
    return {
      module: ConfigModule,
      providers: [ConfigService, { provide: CONFIG_OPT, useValue: opt }],
      exports: [ConfigService],
      global: true,
    };
  }
}
