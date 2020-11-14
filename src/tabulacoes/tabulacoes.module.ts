import { Module } from '@nestjs/common';
import { TabulacoesController } from './tabulacoes.controller';
import { TabulacoesService } from './tabulacoes.service';

@Module({
  controllers: [TabulacoesController],
  providers: [TabulacoesService]
})
export class TabulacoesModule {}
