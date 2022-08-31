import * as sinon from 'sinon';
import * as chai from 'chai';
// @ts-ignore
import chaiHttp = require('chai-http');

import { app } from '../app';

import { Response } from 'superagent';

chai.use(chaiHttp);

const { expect } = chai;
const mockToken = {
    token: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwidXNlcm5hbWUiOiJBZG1pbiIsImVtYWlsIjoiYWRtaW5AYWRtaW4uY29tIiwicm9sZSI6ImFkbWluIiwiaWF0IjoxNjYxOTcwMjM1LCJleHAiOjE2NjI1NzUwMzV9.oyuvcLOUdivdM0dx2fiNWLcuWlWGWOIuL6Y7h3Wq3Y4"
}

describe('Testes para a rota /matches', () => {
    let chaiResponse: Response;

    it('Verifica se retorna as partidas corretamente', async () => {
        chaiResponse = await chai
        .request(app)
        .get('/matches')
        expect(chaiResponse.status).to.be.equal(200);
    });

    it('Verifica se cria as partidas corretamente', async () => {
        chaiResponse = await chai
        .request(app)
        .post('/matches')
        .set({ "authorization": mockToken.token })
        .send({
            homeTeam: 16,
            awayTeam: 8,
            homeTeamGoals: 2,
            awayTeamGoals: 2
        })
        expect(chaiResponse.status).to.be.equal(201);
    });

    it('Verifica se pode cadastrar partidas com números iguais dos times', async () => {
        chaiResponse = await chai
        .request(app)
        .post('/matches')
        .set({ "authorization": mockToken.token })
        .send({
            homeTeam: 16,
            awayTeam: 16,
            homeTeamGoals: 2,
            awayTeamGoals: 2
        })
        expect(chaiResponse.status).to.be.equal(401);
    });

    it('Verifica se pode cadastrar partidas com números de times que não existem', async () => {
        chaiResponse = await chai
        .request(app)
        .post('/matches')
        .set({ "authorization": mockToken.token })
        .send({
            homeTeam: 50,
            awayTeam: 16,
            homeTeamGoals: 2,
            awayTeamGoals: 2
        })
        expect(chaiResponse.status).to.be.equal(404);
    });

    it('Verifica se é possível atualizar uma partida', async () => {
        chaiResponse = await chai
        .request(app)
        .patch('/matches/id/finish')
        .set({ "authorization": mockToken.token })

        expect(chaiResponse.status).to.be.equal(200);
        expect(chaiResponse.body).to.be.eql({ "message": "Finished" })
    });

    it('Verifica se é possível atualizar o placar de uma partida', async () => {
        chaiResponse = await chai
        .request(app)
        .patch('/matches/1')
        .set({ "authorization": mockToken.token })
        .send({
            homeTeamGoals: 3,
            awayTeamGoals: 2
        })
        expect(chaiResponse.status).to.be.equal(200);
        expect(chaiResponse.body).to.be.eql({ "message": "Successfully updated!" })
    });
});