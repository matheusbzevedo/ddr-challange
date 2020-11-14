import { Injectable } from "@nestjs/common";
import { Gravacoes } from './interface/gravacoes.interface';
import * as uuid from 'uuid';
import { CriarGravacoesDTO } from "./dto/criar-gravacoes.dto";

@Injectable()
export class GravacoesService {

  private gravacoes: Gravacoes[] = [];

  criar(criarGravacoesDTO: CriarGravacoesDTO): void {
    const { ramal, telefone } = criarGravacoesDTO;

    const gravacoes: Gravacoes = {
      _id: uuid.v4(),
      ramal,
      telefone,
      dataGravacao: new Date()
    };

    this.gravacoes.push(gravacoes);
  }

  pegarGravacoes(): Gravacoes[] {
    return this.gravacoes;
  }
}