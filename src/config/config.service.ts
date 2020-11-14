import { Injectable } from '@nestjs/common';
import { ConfigManager } from '@nestjsplus/config';
import * as Joi from '@hapi/joi';
import { KnexOptions } from '@nestjsplus/knex';
import {
  MassiveConnectOptions,
  MassiveConfigOptions,
} from '@nestjsplus/massive';

import { resolve } from 'path';

@Injectable()
export class ConfigService extends ConfigManager {
  provideConfigSpec() {
    return {
      host: {
        validate: Joi.string(),
        required: false,
        default: 'localhost',
      },
      port: {
        validate: Joi.number()
        .min(5000)
        .max(65535),
        required: false,
        default: 5432,
      },
      user: {
        validate: Joi.string(),
        required: true,
      },
      password: {
        validate: Joi.string(),
        required: true,
      },
      database: {
        validate: Joi.string(),
        required: true,
      },
    };
  }
  
  createKnexOptions(): KnexOptions {
    return {
      client: 'sqlite3',
      debug: true,
      connection: {
        filename: './database/db.sqlite'
      },
    };
  }
  
  createMassiveConnectOptions(): MassiveConnectOptions {
    return {
      host: this.get<string>('host'),
      user: this.get<string>('user'),
      password: this.get<string>('password'),
      database: this.get<string>('database'),
      port: this.get<number>('port'),
    };
  }
  
  createMassiveConfigOptions(): MassiveConfigOptions {
    return {
      scripts: resolve(__dirname, '../../', 'dbscripts'),
    };
  }
}