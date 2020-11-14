import { Injectable } from "@nestjs/common";
import { Tabulacoes } from './interface/tabulacoes.interface';
import { CriarTabulacoesDTO } from './dto/criar-tabulacoes.dto';
import * as uuid from 'uuid';

@Injectable()
export class TabulacoesService {

  private tabulacoes: Tabulacoes[] = [];
  private numeroProtocolo = 0;

  criar(criarTabulacoesDTO: CriarTabulacoesDTO):void {
    const { nomeCliente, numeroAcesso, numeroBinado } = criarTabulacoesDTO;

    const tabulacoes: Tabulacoes = {
      _id: uuid.v4(),
      nomeCliente,
      numeroAcesso,
      numeroBinado,
      dataAtendimento: new Date(),
      protocolo: `${new Date().getFullYear()}-${this.numeroProtocolo}`
    };

    this.numeroProtocolo ++;
    this.tabulacoes.push(tabulacoes);
  }

  pegarTabulacoes():Tabulacoes[] {
    return this.tabulacoes;
  }
}