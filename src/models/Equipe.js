import { Schema, model } from "mongoose";

const EquipeSchema = new Schema({
    nome:String,
});

export default model("Equipe", EquipeSchema);