import { Body, Controller, Get, Post } from '@nestjs/common';
import { CriarTabulacoesDTO } from './dto/criar-tabulacoes.dto';
import { TabulacoesService } from './tabulacoes.service';

@Controller('api/v1/tabulacoes')
export class TabulacoesController {

  constructor(private readonly tabulacoesService: TabulacoesService) {}

  @Post()
  async criarTabulacoes(
    @Body() criarTabulacoesDTO: CriarTabulacoesDTO
  ) {
    await this.tabulacoesService.criar(criarTabulacoesDTO);
  }

  @Get()
  pegarTabulacoes() {
    return this.tabulacoesService.pegarTabulacoes();
  }
}
