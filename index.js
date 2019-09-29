

const Player = require('./player')
let config = require('./config')

class CheatGame {
    constructor(iterations, p1, p2) {
        this.iterations = iterations;

        this.playerOne = this.createPlayer(p1.name, p1.type, p1.cheatOption)
        this.playerTwo = this.createPlayer(p2.name, p2.type, p2.cheatOption)
        this.playerOneScore = 0
        this.playerTwoScore = 0
        this.playerOneChoices = [];
        this.playerTwoChoices = [];
    }

    setPlayerScores(choice1, choice2) {

        this.playerOneScore += config.rules[choice1 + "$" + choice2]["P1"]
        this.playerTwoScore += config.rules[choice1 + "$" + choice2]["P2"]

    }

    storePlayerChoices(choice1, choice2) {

        this.playerOneChoices.push(choice1);
        this.playerTwoChoices.push(choice2);
    }

    printGameResult() {
        console.log('Game over ')
        console.log('P1 ' + this.playerOne.name + 'Score ' + this.playerOneScore);
        console.log('P2 ' + this.playerTwo.name + 'Score ' + this.playerTwoScore);
    }

    createPlayer(name, type, cheatOption) {
        if (type === 'BOT') {
            if (cheatOption === 'COPYCAT')
                return new Player.Copycat(name, cheatOption)
            else
                return new Player.Bot(name, cheatOption)
        } else {
            return new Player.Player(name)
        }
    }

    runGame() {

        for (let i = 0; i < this.iterations; i++) {

            let prevChoiceOfPlayerTwo = i > 0 ? this.playerTwoChoices[i-1] : ""
            let prevChoiceOfPlayerOne = i > 0 ? this.playerOneChoices[i-1] : ""

            let p1HitValue = this.playerOne.play(i, prevChoiceOfPlayerTwo);
            let p2HitValue = this.playerTwo.play(i, prevChoiceOfPlayerOne);


            console.log('Iterattion ' + i)
            console.log('Player 1 - ' + p1HitValue);
            console.log('Player 2 - ' + p2HitValue);

            this.setPlayerScores(p1HitValue, p2HitValue);
            
            this.storePlayerChoices(p1HitValue, p2HitValue);

        }
    }
}

function startGame() {
    let cg = new CheatGame(6, { name: "Ara", type: "BOT", cheatOption: "COPYCAT" }, { name: "Gan", type: "PLAYER", cheatOption: "COOPERATE" });
    cg.runGame();
    cg.printGameResult();
}

startGame();



