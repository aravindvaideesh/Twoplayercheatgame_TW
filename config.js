module.exports = {
    playOptions: ['COOPERATE', 'CHEAT'],
    rules: {
        "COOPERATE$COOPERATE": {
            P1: 2,
            P2: 2
        },
        "COOPERATE$CHEAT": {
            P1: -1,
            P2: 3
        },
        "CHEAT$COOPERATE": {
            P1: 3,
            P2: -1
        },
        "CHEAT$CHEAT": {
            P1: 0,
            P2: 0
        }
    },
    playerTypes: {
        PLAYER: "Player",
        KIND: "KindBot",
        EVIL: "EvilBot",
        GRUDGER: "Grudger",
        COPYCAT: "Copycat"
    }
}