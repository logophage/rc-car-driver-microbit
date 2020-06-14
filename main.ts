radio.onReceivedValue(function (name, value) {
    if (name == "forward") {
        basic.showLeds(`
            . . # . .
            . # # # .
            # . # . #
            . . # . .
            . . # . .
            `)
        maqueen.motorRun(maqueen.Motors.All, maqueen.Dir.CW, 128)
    } else {
        if (name == "left") {
            basic.showLeds(`
                . . # . .
                . # . . .
                # # # # #
                . # . . .
                . . # . .
                `)
            maqueen.motorRun(maqueen.Motors.M1, maqueen.Dir.CW, 128)
            maqueen.motorStop(maqueen.Motors.M2)
        } else {
            if (name == "right") {
                basic.showLeds(`
                    . . # . .
                    . . . # .
                    # # # # #
                    . . . # .
                    . . # . .
                    `)
                maqueen.motorRun(maqueen.Motors.M2, maqueen.Dir.CW, 128)
                maqueen.motorStop(maqueen.Motors.M1)
            } else {
                maqueen.motorStop(maqueen.Motors.All)
            }
        }
    }
})
radio.setGroup(1)
