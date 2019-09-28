

const Player = require('./player')
let config = require('./config')

class CheatGame {
    constructor(iterations, p1, p2) {
        this.iterations = iterations;

        this.playerOne = this.createPlayer(p1.name, p1.type, p1.cheatOption)
        this.playerTwo = this.createPlayer(p2.name, p2.type, p2.cheatOption)
    }

    setPlayerScore() {

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
        let p1Score = 0,
            p2Score = 0;
        let prevPlayMaintainer = {P1 :"", P2: ""}
        for (let i = 0; i < this.iterations; i++) {
            let p1HitValue = this.playerOne.play(iteration, prevPlayMaintainer["P2"]);
            let p2HitValue = this.playerTwo.play(iteration, prevPlayMaintainer["P1"]);


            console.log('Iterattion ' + i)
            console.log('Player 1 - ' + p1HitValue);
            console.log('Player 2 - ' + p2HitValue);

            p1Score += config.rules[p1HitValue + "$" + p2HitValue]["P1"]
            p2Score += config.rules[p1HitValue + "$" + p2HitValue]["P2"]

            prevPlayMaintainer["P1"] = p1HitValue;
            prevPlayMaintainer["P2"] = p2HitValue;

        }
        console.log('Game over ')
        console.log('P1 ' + this.playerOne.name + 'Score ' + p1Score);
        console.log('P2 ' + this.playerTwo.name + 'Score' + p2Score);
    }
}

function startGame() {
    let cg = new CheatGame(6, { name: "Ara", type: "BOT", cheatOption: "CHEAT" }, { name: "Gan", type: "PLAYER", cheatOption: "COOPERATE" });
    cg.runGame();
}

startGame();



