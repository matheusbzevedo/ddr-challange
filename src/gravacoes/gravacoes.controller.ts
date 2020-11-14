import { Body, Controller, Get, Post } from '@nestjs/common';
import { CriarGravacoesDTO } from './dto/criar-gravacoes.dto';
import { GravacoesService } from './gravacoes.service';

@Controller('api/v1/gravacoes')
export class GravacoesController {

  constructor(private readonly gravacoesService: GravacoesService) {}

  @Post()
  async criarGravacoes(
    @Body() criarGravacoesDTO: CriarGravacoesDTO
  ) {
    await this.gravacoesService.criar(criarGravacoesDTO);
  }

  @Get()
  async pegarGravacoes() {
    return this.gravacoesService.pegarGravacoes();
  }
}
