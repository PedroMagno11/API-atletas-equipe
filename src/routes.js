import { Router } from 'express';
import AtletaController from './controllers/AtletaController';
import EquipeController from './controllers/EquipeController';


const routes = new Router();

//Atleta
routes.post('/novoAtleta', AtletaController.CadastrarAtleta);
routes.get('/atletas', AtletaController.ListarAtletas);
routes.get('/atletas/listarPorCategoria/:categoria', AtletaController.ListarAtletasPorCategoria);
routes.get('/atletas/listarPorEquipe/:equipe', AtletaController.ListarAtletasPorEquipe);
routes.get('/atletas/:atleta_id', AtletaController.ExibirAtleta);
routes.put('/atletas/:atleta_id/editar', AtletaController.AtualizarDadosDoAtleta);
routes.delete('/atletas/:atleta_id/cancelarInscricao', AtletaController.CancelarInscricaoDoAtleta);




//Equipe
routes.post('/novaEquipe', EquipeController.CadastarEquipe);



export default routes;