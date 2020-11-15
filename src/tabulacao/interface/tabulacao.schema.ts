import * as mongoose from 'mongoose';

export const TabulacaoSchema = new mongoose.Schema({
  nomeCliente: String,
  protocolo: {
    type: String,
    unique: true
  },
  dataAtendimento: Date,
  numeroBinado: String,
  numeroAcesso: String
});