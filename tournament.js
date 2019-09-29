const Player = require('./player')
let config = require('./config')
const CheatGame = require('./game')

class Tournament {
    constructor(p1, p2, p3, p4) {

        this.player1 = { playerMachine: null, totalScore: 0 }
        this.player2 = { playerMachine: null, totalScore: 0 }
        this.player3 = { playerMachine: null, totalScore: 0 }
        this.player4 = { playerMachine: null, totalScore: 0 }

        this.player1.playerMachine = this.createPlayer(p1.name, p1.type)
        this.player2.playerMachine = this.createPlayer(p2.name, p2.type)
        this.player3.playerMachine = this.createPlayer(p3.name, p3.type)
        this.player4.playerMachine = this.createPlayer(p4.name, p4.type)

        this.combinations = [];

        this.setCombinations();

    }

    setCombinations() {
        this.combinations = [[this.player1, this.player2], [this.player1, this.player3], [this.player1, this.player4], [this.player2, this.player3], [this.player2, this.player4], [this.player3, this.player4]]
    }

    createPlayer(name, type) {
        return new Player[config.playerTypes[type]](name);
    }

    playTournament() {

        for (let i = 0; i < this.combinations.length; i++) {
            let cg = new CheatGame(5, this.combinations[i][0].playerMachine, this.combinations[i][1].playerMachine);
            cg.runGame();
            cg.printGameResult();
            this.updateTournamentScores(cg, this.combinations[i][0], this.combinations[i][1])
        }
    }

    updateTournamentScores(gameInstance, player1, player2) {
        let scores = gameInstance.getPlayerScores()
        player1.totalScore += scores[0];
        player2.totalScore += scores[1];
    }

    displayResults() {
        console.log('\n');
        console.log(' ------ Tournament Results ------------- ');
        console.log('\n');
        console.log(this.player1.playerMachine.name + ' Score :' + this.player1.totalScore)
        console.log(this.player2.playerMachine.name + ' Score :' + this.player2.totalScore)
        console.log(this.player3.playerMachine.name + ' Score :' + this.player3.totalScore)
        console.log(this.player4.playerMachine.name + ' Score :' + this.player4.totalScore)
    }

}

module.exports = Tournament