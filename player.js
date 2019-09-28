let config = require('./config');

class Player {
    constructor(name) {
        this.name = name
    }

    play(gameRound, prevInput) {
        return config.playOptions[Math.round(Math.random())];
    }
}

class Bot extends Player {
    constructor(name, type) {
        super(name);
        this.type = type
    }

    play(gameRound, prevInput) {
        return this.type;
    }
}

class Copycat extends Player {
    constructor(name, type) {
        super(name);
    }

    play(gameRound, prevInput) {
        if (gameRound === 0) {
            return config.playOptions[0];
        } else {
            return prevInput
        }
    }
}

module.exports = { Player, Bot, Copycat }