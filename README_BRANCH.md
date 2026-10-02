# Config

- run npm i --save @nestjs/config
- to can use config module

- make file inside config folder
- put all secret data at .env
- inside config file
  export default {
  database: {
  connectionString: process.env.CONNECTION_STRING,
  },
  }

- inside src\app.module.ts
- make import import { ConfigModule } from '@nestjs/config';
- use it inside appModule
- inside imports add ConfigModule.forRoot({}),
- case u change name of file .env put path of file inside
  ConfigModule.forRoot({envFilePath : ""}),
- u can put cache : true to save .env values inside memory to save time
- isGlobal: true => so u can use it at any where inside app without export it

# Custom configuration files

- case have many config file like
  config/configuration.ts
  config/configuration2.ts
- content of first file like that

export default () => ({
port: parseInt(process.env.PORT ?? '', 10) || 3000,
database: {
host: process.env.DATABASE_HOST,
port: parseInt(process.env.DATABASE_PORT ?? '', 10) || 5432
}
});

- now we want to load this 2 file inside config module
- import files
  import configuration from './config/configuration.js';
  import configuration2 from './config/configuration2.js';

ConfigModule.forRoot({
load: [configuration,configuration2 ],
}),

# use Config inside any module

- import { ConfigService } from '@nestjs/config'
- at constructor add private configService : ConfigService
- at any method console.log(configService.get('CONNECTION_STRING'))
  CONNECTION_STRING is name of varible inside .env
- or at any method console.log(configService.get('database.connectionString'))
  database.connectionString is string inside src\config\config.ts

# Remove Global from ConfigModule

- now we want to use configModule inside any module
- inside module of any feature
  at imports [ConfigModule.forFeature(config)]
  - import import { ConfigModule } from '@nestjs/config';
  - import config from 'src\config\config.ts';

# use Port

- add port 3000 at .env
- add port at src\config\config.ts
  port: process.env.PORT,
- inside main get configuration
  const config = app.get(ConfigService);
- then use it await app.listen(config.get('port') ?? 3000);
