import { Module } from '@nestjs/common';
import { TabulacaoController } from './tabulacao.controller';
import { TabulacaoService } from './tabulacao.service';

@Module({
  controllers: [TabulacaoController],
  providers: [TabulacaoService]
})
export class TabulacaoModule {}
