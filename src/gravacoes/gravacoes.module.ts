import { Module } from '@nestjs/common';
import { GravacoesController } from './gravacoes.controller';
import { GravacoesService } from './gravacoes.service';

@Module({
  controllers: [GravacoesController],
  providers: [GravacoesService]
})
export class GravacoesModule {}
