import { Injectable } from '@nestjs/common';
import { Cron } from '@nestjs/schedule';

@Injectable()
export class CronService {

  @Cron('*/10 * * * * *')
  runEvery10Seconds() {
    console.log('Every 10 seconds');
  }
}
