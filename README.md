# Config module for Nest Js

This module can be used to load the .env and other config in nest js project. Environment variables will be checked if they exist or not. if they dont exist an error will be throws on application boot.

### Instructions

- Install module

```typescript
 npm i @salman3001/nest-config-module
```

- import config modules and register in root module

```typescript
import { ConfigModule } from '@salman3001/nest-config-module';

imports: [
    ConfigModule.register({
      config: new Config(),
      envFile:
        process.env.NODE_ENV === 'prod'
          ? '.env.prod'
          : process.env.NODE_ENV === 'test'
            ? '.env.test'
            : '.env',
    }),
  ],
```

- provide env file path and and config class.
- A config class will implement a IConfig interface

```typescript
// test config

import { IConfig } from './interfaces/IConfig';

export class Config implements IConfig {
  // Return enviroment variables from this function.
  // Do not define the return types (important).
  envs() {
    return {
      NODE_ENV: process.env.NODE_ENV as string,
      PORT: process.env.PORT as string,
      APP_SECRETE: process.env.APP_SECRETE as string,
      DB_URI: process.env.DB_URI as string,
      PG_HOST: process.env.PG_HOST as string,
      PG_PORT: process.env.PG_PORT as string,
      PG_USERNAME: process.env.PG_USERNAME as string,
      PG_PASSWORD: process.env.PG_PASSWORD as string,
      PG_DB: process.env.PG_DB as string,
    };
  }

  //add other config
  app_name = 'nest app';
  app_meta = {
    url: 'some url',
  };
}
```

- Config will be available globally in all modules. Import in constructor and start using as below.

```typescript
import { Config } from 'src/config/config';
import { ConfigService } from '@salman3001/nest-config-module';

export class AuthController {
  constructor(
    private readonly authService: AuthService,
    private config: ConfigService, // <-- injecting service here
  ) {

   login() {
    // using config
    console.log(this.config.get<Config>().envs().NODE_ENV)
    }
  }
}

service.get<TestConfig>().envs().NAME // from env file
service.get<TestConfig>().profession // other config
```

- type hints will be provided by typescript
