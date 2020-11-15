import { Module } from '@nestjs/common';
import { GravacaoModule } from './gravacao/gravacao.module';
import { TabulacaoModule } from './tabulacao/tabulacao.module';
import { CronService } from './cron/cron.service';
import { ScheduleModule } from '@nestjs/schedule';
import { MongooseModule } from '@nestjs/mongoose';


@Module({
  imports: [
    MongooseModule.forRoot('mongodb+srv://admin:YbTQHfGEeCVh1Fp9@cluster0.q1v50.mongodb.net/ddrchallenge?retryWrites=true&w=majority',{
      useNewUrlParser: true,
      useCreateIndex: true,
      useUnifiedTopology: true,
      useFindAndModify: false
    }),
    GravacaoModule,
    TabulacaoModule,
    ScheduleModule.forRoot(),
  ],
  controllers: [],
  providers: [CronService],
})
export class AppModule {}
