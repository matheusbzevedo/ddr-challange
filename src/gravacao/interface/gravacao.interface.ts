import { Document } from 'mongoose';

export interface Gravacao extends Document {
  telefone: string;
  ramal: string;
  readonly dataGravacao: Date;
}