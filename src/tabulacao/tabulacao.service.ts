import { Injectable, NotFoundException } from "@nestjs/common";
import { Tabulacao } from './interface/tabulacao.interface';
import { CriarTabulacaoDto } from './dto/criar-tabulacao.dto';
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";

@Injectable()
export class TabulacaoService {

  constructor(@InjectModel('Tabulacao') private readonly tabulacaoModel: Model<Tabulacao>) {}

  async criarAtualizarTabulacao(criarTabulacaoDto: CriarTabulacaoDto): Promise<void> {
    const { protocolo } = criarTabulacaoDto;

    const tabulacaoEncontrada = await this.tabulacaoModel.findOne({ protocolo }).exec();

    if (tabulacaoEncontrada)
      await this.atualizar(criarTabulacaoDto);
    else
      await this.criar(criarTabulacaoDto);
  }

  private async criar(criarTabulacaoDto: CriarTabulacaoDto): Promise<Tabulacao> {
    const tabulacaoCriada = new this.tabulacaoModel(criarTabulacaoDto);

    return await tabulacaoCriada.save();
  }

  private async atualizar(criarTabulacaoDto: CriarTabulacaoDto): Promise<Tabulacao> {
    return await this.tabulacaoModel.findOneAndUpdate({ protocolo: criarTabulacaoDto.protocolo }, {$set: criarTabulacaoDto });
  }

  async consultarTodasTabulacoes(): Promise<Tabulacao[]> {
    return await this.tabulacaoModel.find().exec();
  }

  async consultarTabulacaoPeloProtocolo(protocolo: string): Promise<Tabulacao> {
    const tabulacaoEncontrada = await this.tabulacaoModel.findOne({ protocolo }).exec();

    if (!tabulacaoEncontrada) throw new NotFoundException(`Tabulação com o protocolo ${protocolo} não encontrada!`);

    return tabulacaoEncontrada;
  }

  async deletarTabulacao(protocolo: string): Promise<any> {
    return await this.tabulacaoModel.deleteOne({ protocolo }).exec();
  }

}