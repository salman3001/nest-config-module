import { Test, TestingModule } from '@nestjs/testing';
import { ConfigService } from './config.service';
import { resolve } from 'path';
import { TestConfig } from './TestConfig';
import { ConfigModule } from './config.module';

describe('ConfigService', () => {
  let service: ConfigService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [
        ConfigModule.register({
          envFile: resolve('.env'), // absolute path,
          config: new TestConfig(),
        }),
      ],
    }).compile();

    service = module.get<ConfigService>(ConfigService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
    expect(service.get<TestConfig>().envs().NAME).toBe('salman');
    expect(service.get<TestConfig>().job).toBe('full time');
    expect(service.get<TestConfig>().profesion).toBe('Web developer');
  });
});
