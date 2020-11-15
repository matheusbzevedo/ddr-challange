import * as mongoose from 'mongoose';

export const GravacaoSchema = new mongoose.Schema({
  telefone: {
    type: String,
    unique: true
  },
  ramal: String,
  dataGravacao: Date
}, { timestamps: true, collection: 'gravacoes' });