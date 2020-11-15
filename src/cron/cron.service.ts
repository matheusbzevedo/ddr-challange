import { Injectable } from '@nestjs/common';
import { Cron } from '@nestjs/schedule';

@Injectable()
export class CronService {

  @Cron('0 0 0/6 ? * * *')
  runEvery10Seconds() {
    console.log('A cada 6 horas, iniciando de 00:00');
  }
}
