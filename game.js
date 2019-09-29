

const Player = require('./player')
let config = require('./config')

class CheatGame {
    constructor(iterations, p1, p2) {
        this.iterations = iterations;

        this.gamePlayerOne = {}
        this.gamePlayerTwo = {}

        this.gamePlayerOne.playerMachine = p1
        this.gamePlayerTwo.playerMachine = p2
        this.gamePlayerOne.playerScore = 0
        this.gamePlayerTwo.playerScore = 0
        this.gamePlayerOne.playerChoices = [];
        this.gamePlayerTwo.playerChoices = [];
    }

    setPlayerScores(choice1, choice2) {

        this.gamePlayerOne.playerScore += config.rules[choice1 + "$" + choice2]["P1"]
        this.gamePlayerTwo.playerScore += config.rules[choice1 + "$" + choice2]["P2"]

    }

    getPlayerScores() {
        return [this.gamePlayerOne.playerScore, this.gamePlayerTwo.playerScore];
    }

    storePlayerChoices(choice1, choice2) {

        this.gamePlayerOne.playerChoices.push(choice1);
        this.gamePlayerTwo.playerChoices.push(choice2);
    }

    printGameResult() {
        console.log('Game over ')
        console.log('P1 ' + this.gamePlayerOne.playerMachine.name + 'Score ' + this.gamePlayerOne.playerScore);
        console.log('P2 ' + this.gamePlayerTwo.playerMachine.name + 'Score ' + this.gamePlayerTwo.playerScore);
    }

    runGame() {

        for (let i = 0; i < this.iterations; i++) {

            let p1HitValue = this.gamePlayerOne.playerMachine.play(i, this.gamePlayerTwo.playerChoices);
            let p2HitValue = this.gamePlayerTwo.playerMachine.play(i, this.gamePlayerOne.playerChoices);


            console.log('Iterattion ' + i)
            console.log('Player 1 - ' + p1HitValue);
            console.log('Player 2 - ' + p2HitValue);

            this.setPlayerScores(p1HitValue, p2HitValue);

            this.storePlayerChoices(p1HitValue, p2HitValue);

        }
    }
}

module.exports = CheatGame



