let x = 0
function image () {
    basic.showLeds(`
        # . . . #
        . # . # .
        . . # . .
        # # . # #
        # # . # #
        `)
    music.playTone(262, music.beat(BeatFraction.Whole))
    basic.showLeds(`
        . . . . .
        . # # # .
        . # # # .
        . # # # .
        . . . . .
        `)
    music.playTone(262, music.beat(BeatFraction.Whole))
    basic.showLeds(`
        # # # # #
        # . . . #
        # . . . #
        # . . . #
        # # # # #
        `)
    music.playTone(262, music.beat(BeatFraction.Whole))
    basic.clearScreen()
}
basic.forever(function () {
    if (TobbieII.LBlock(900) || TobbieII.RBlock(900)) {
        image()
        x = 1 + randint(0, 2)
        TobbieII.rightward()
        basic.pause(3500)
        TobbieII.stopturn()
        if (x == 1) {
            basic.showLeds(`
                # . . . #
                . # . # .
                . . # . .
                # # . # #
                # # . # #
                `)
        }
        if (x == 2) {
            basic.showLeds(`
                . . . . .
                . # # # .
                . # # # .
                . # # # .
                . . . . .
                `)
        }
        if (x == 3) {
            basic.showLeds(`
                # # # # #
                # . . . #
                # . . . #
                # . . . #
                # # # # #
                `)
        }
        music.startMelody(music.builtInMelody(Melodies.PowerDown), MelodyOptions.Once)
        basic.pause(2000)
    }
})
