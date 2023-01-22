import { Schema, model } from "mongoose";

const AtletaSchema = new Schema({
    nome: String,
    sexo: String,
    faixa:String,
    classe:String,
    categoria: String,
    equipe: String,
});

export default model('Atleta', AtletaSchema);