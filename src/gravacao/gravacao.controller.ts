import { Body, Controller, Delete, Get, Post, Query } from '@nestjs/common';
import { CriarGravacaoDto } from './dto/criar-gravacao.dto';
import { GravacaoService } from './gravacao.service';
import { Gravacao } from './interface/gravacao.interface';

@Controller('api/v1/gravacoes')
export class GravacaoController {

  constructor(private readonly gravacaoService: GravacaoService) {}

  @Post()
  async criarAtualizarGravacao(
    @Body() criarGravacaoDto: CriarGravacaoDto
  ) {
    await this.gravacaoService.criarAtualizarGravacao(criarGravacaoDto);
  }

  @Get()
  async consultarGravacao(
    @Query('telefone') telefone: string 
  ): Promise<Gravacao | Gravacao[]> {
    if (telefone) return this.gravacaoService.consultarGravacaoPeloTelefone(telefone);

    return this.gravacaoService.consultarTodasGravacoes();
  }

  @Delete()
  async deletarGravacao(
    @Query('telefone') telefone: string
  ): Promise<void> {
    this.gravacaoService.deletarGravacao(telefone);
  }
}
