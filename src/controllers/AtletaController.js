// métodos : index, show , update, store , destroy

/*
index: Listagem de atletas
store: Cadastrar um atleta
show: Quando queremos mostrar um ÚNICO atleta
update: Quando queremos atualizar um atleta
destroy: Quando queremos deletar um atleta
 */

import Atleta from "../models/Atleta";

class AtletaController{

    async CadastrarAtleta(req, res){
        const {nome , sexo , faixa ,classe, categoria , equipe} = req.body;

        let atleta = await Atleta.findOne({nome});
        if(!atleta){
            atleta = await Atleta.create({
                nome,
                sexo,
                faixa,
                classe,
                categoria,
                equipe,
            })
        }

        return res.json(atleta);
    }

    async ListarAtletasPorEquipe(req, res){
        const {equipe} = req.params;
        const atletas = await Atleta.find({equipe});
        return res.json(atletas);

    }

    async ListarAtletasPorCategoria(req, res){

        const { categoria } = req.params;

        const atletas = await Atleta.find({categoria});
        return res.json(atletas);


    }
    
    async ListarAtletas(req, res){
        
        const atletas = await Atleta.find();

        return res.json(atletas);
    }

    async ExibirAtleta(req, res){
        const { atleta_id } = req.params;

        const atleta = await Atleta.findById({_id : atleta_id});
        return res.json(atleta);
        
    }

    async AtualizarDadosDoAtleta(req, res){
        const { atleta_id } = req.params;
        const {nome, sexo, faixa, classe, categoria, equipe} = req.body;

        
        const atleta = await Atleta.updateOne({_id: atleta_id}, {
            nome,
            sexo,
            faixa,
            classe,
            categoria,
            equipe,
        });

        const atletaAtualizada = await Atleta.findOne({_id: atleta_id});

        return res.json(atletaAtualizada);

    }

    async CancelarInscricaoDoAtleta(req, res){
        const { atleta_id } = req.params;

        const atleta = await Atleta.deleteOne({_id: atleta_id});

        return res.json({aviso:"Inscrição cancelada"});


    }
}

export default new AtletaController();