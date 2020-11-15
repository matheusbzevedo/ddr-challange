import { Document } from 'mongoose';

export interface Tabulacao extends Document {
  nomeCliente: string;
  readonly protocolo: string;
  readonly dataAtendimento: Date;
  numeroBinado: string;
  numeroAcesso: string;
}