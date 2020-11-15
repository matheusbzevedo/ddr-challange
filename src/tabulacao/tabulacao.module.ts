import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { TabulacaoSchema } from './interface/tabulacao.schema';
import { TabulacaoController } from './tabulacao.controller';
import { TabulacaoService } from './tabulacao.service';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'Tabulacao', schema: TabulacaoSchema }])
  ],
  controllers: [TabulacaoController],
  providers: [TabulacaoService]
})
export class TabulacaoModule {}
