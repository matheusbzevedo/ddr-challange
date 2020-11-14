import { Module } from '@nestjs/common';
import { GravacoesModule } from './gravacoes/gravacoes.module';
import { TabulacoesModule } from './tabulacoes/tabulacoes.module';
import { CronService } from './cron/cron.service';
import { ScheduleModule } from '@nestjs/schedule';
import { ConfigService } from './config/config.service';
import { KnexModule } from '@nestjsplus/knex';
import { ConfigModule } from './config/config.module';


@Module({
  imports: [
    GravacoesModule,
    TabulacoesModule,
    ScheduleModule.forRoot(),
    KnexModule.registerAsync({
      useExisting: ConfigService,
    }),
    ConfigModule
  ],
  controllers: [],
  providers: [CronService],
})
export class AppModule {}
