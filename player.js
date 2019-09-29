let config = require('./config');

class Player {
    constructor(name) {
        this.name = name
        
    }

    play(gameRound, oppInputs) {
        return config.playOptions[Math.round(Math.random())];
    }
}

class KindBot extends Player {
    constructor(name, type) {
        super(name)
    }

    play(gameRound, oppInputs) {
        return config.playOptions[0];
    }
}

class EvilBot extends Player {
    constructor(name) {
        super(name)
    }

    play(gameRound, oppInputs) {
        return config.playOptions[1];
    }
}

class Copycat extends Player {
    constructor(name) {
        super(name)
    }

    play(gameRound, oppInputs) {
        if (gameRound === 0) {
            return config.playOptions[0];
        } else {
            return oppInputs[gameRound - 1]
        }
    }
}

class Grudger extends Player {
    constructor(name) {
        super(name)
    }

    play(gameRound, oppInputs) {
        if (oppInputs.indexOf(config.playOptions[1]) > -1) {
            return config.playOptions[1]
        } else {
            return config.playOptions[0]
        }
    }
}

module.exports = { Player, KindBot, EvilBot, Copycat, Grudger }