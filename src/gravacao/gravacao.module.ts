import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { GravacaoController } from './gravacao.controller';
import { GravacaoService } from './gravacao.service';
import { GravacaoSchema } from './interface/gravacao.schema';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'Gravacao', schema: GravacaoSchema }])
  ],
  controllers: [GravacaoController],
  providers: [GravacaoService]
})
export class GravacaoModule {}
