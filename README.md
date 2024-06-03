# Config module for Nest Js

This module can be used to load the .env and other config in nest js project. Environment variables will be checked if they exist or not. if they dont exist an error will be throws on application boot.

### Instructions

- Install module `npm i @salman/module`
- import config modules and register in root module

```
      imports: [
        ConfigModule.register({
          envFile: resolve('.env'), // absolute path,
          config: new TestConfig(),
        }),
      ],
```

- provide env file path and and config class.
- A config class will implement a IConfig interface

```
<!-- test config -->

import { IConfig } from './interfaces/IConfig';

export class TestConfig implements IConfig {

    // Return enviroment variables from this function.
    // Do not define the return types (important).
     envs() {
        return {
        NAME: process.env.NAME as string,
        };
    }

    //add other config
    profession = 'Web developer';
    job = 'full time';
}

```

- Config will be available globally in all modules. Import in constructor and start using as below.

```
service.get<TestConfig>().envs().NAME // from env file
service.get<TestConfig>().profession // other config
```

- type hints will be provided by typescript
