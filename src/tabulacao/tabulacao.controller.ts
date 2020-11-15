import { Body, Controller, Delete, Get, Post, Query } from '@nestjs/common';
import { CriarTabulacaoDto } from './dto/criar-tabulacao.dto';
import { Tabulacao } from './interface/tabulacao.interface';
import { TabulacaoService } from './tabulacao.service';

@Controller('api/v1/tabulacoes')
export class TabulacaoController {

  constructor(private readonly tabulacaoService: TabulacaoService) {}

  @Post()
  async criarAtualizarTabulacao(
    @Body() criarTabulacaoDto: CriarTabulacaoDto
  ) {
    await this.tabulacaoService.criarAtualizarTabulacao(criarTabulacaoDto);
  }

  @Get()
  async consultarTabulacao(
    @Query('protocolo') protocolo: string
  ): Promise<Tabulacao | Tabulacao[]> {
    if (protocolo) return await this.tabulacaoService.consultarTabulacaoPeloProtocolo(protocolo);

    return this.tabulacaoService.consultarTodasTabulacoes();
  }

  @Delete()
  async deletarTabulacao(
    @Query('protocolo') protocolo: string
  ): Promise<void> {
    return await this.tabulacaoService.deletarTabulacao(protocolo);
  }
}
