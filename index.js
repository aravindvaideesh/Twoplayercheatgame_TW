const Tournament = require('./tournament')
const game = require('./game')

function initGame() {


}

function initTournament() {

    let tou = new Tournament({name : 'Kind Bot', type: 'KIND'}, {name : 'Evil Bot', type: 'EVIL'}, {name: 'Copy Cat', type: 'COPYCAT'}, {name: 'Grudge', type: 'GRUDGER'})
    tou.playTournament();
    tou.displayResults();

}

initTournament();
