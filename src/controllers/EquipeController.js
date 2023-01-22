import { Schema } from 'mongoose';
import Equipe from '../models/Equipe';

class EquipeController{

    //cadastrar Equipe
    async CadastarEquipe(req, res){
        const { nome } = req.body;

        let equipe = await Equipe.findOne({nome});

        if(!equipe){
            equipe = await Equipe.create({
                nome,
            });
        }

        return res.json(equipe);
    }

    //Mostrar equipe

    //Mostrar equipes Cadastradas

    //Atualizar dados da Equipe

    //Mostrar Atletas por Equipe

}

export default new EquipeController();