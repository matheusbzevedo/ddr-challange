import { Injectable, NotFoundException } from '@nestjs/common';
import { Gravacao } from './interface/gravacao.interface';
import { CriarGravacaoDto } from './dto/criar-gravacao.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

@Injectable()
export class GravacaoService {

  constructor(@InjectModel('Gravacao') private readonly gravacaoModel: Model<Gravacao>) {}

  async criarAtualizarGravacao(criarGravacaoDto: CriarGravacaoDto): Promise<Gravacao> {
    const { telefone } = criarGravacaoDto;

    const gravacaoEncontrada = await this.gravacaoModel.findOne({ telefone }).exec();

    if (gravacaoEncontrada)
      return this.atualizar(criarGravacaoDto);
    else 
      return this.criar(criarGravacaoDto);
  }

  private async criar(criarGravacaoDto: CriarGravacaoDto): Promise<Gravacao> {
    const gravacaoCriada = new this.gravacaoModel(criarGravacaoDto);

    return await gravacaoCriada.save();
  }

  private async atualizar(criarGravacaoDto: CriarGravacaoDto): Promise<Gravacao> {
    return await this.gravacaoModel.findOneAndUpdate({ telefone: criarGravacaoDto.telefone }, {$set: criarGravacaoDto}).exec();
  }

  async consultarTodasGravacoes(): Promise<Gravacao[]> {
    return await this.gravacaoModel.find().exec();
  }

  async consultarGravacaoPeloTelefone(telefone: string): Promise<Gravacao> {
    const gravacaoEntrada = await this.gravacaoModel.findOne({ telefone }).exec();

    if (!gravacaoEntrada) throw new NotFoundException(`Gravação com o número ${telefone} não encontrada!`);

    return gravacaoEntrada; 
  }

  async deletarGravacao(telefone: string): Promise<any> {
    return await this.gravacaoModel.deleteOne({ telefone }).exec();
  }
}