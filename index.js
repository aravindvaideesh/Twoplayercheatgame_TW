const Tournament = require('./tournament')
const CheatGame = require('./game')
const Player = require('./player')
let config = require('./config')

function initGame() {

    let game = new CheatGame(5, new Player[config.playerTypes['KIND']]('Kind Bot'), new Player[config.playerTypes['EVIL']]('Evil Bot'))
    game.runGame();
    game.printGameResult();
}

function initTournament() {

    let tou = new Tournament({ name: 'Kind Bot', type: 'KIND' }, { name: 'Evil Bot', type: 'EVIL' }, { name: 'Copy Cat', type: 'COPYCAT' }, { name: 'Grudge', type: 'GRUDGER' })
    tou.playTournament();
    tou.displayResults();

}

//initTournament();
initGame();
