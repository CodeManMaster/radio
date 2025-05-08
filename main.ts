radio.onReceivedNumber(function (receivedNumber) {
    basic.showLeds(`
        . . . . .
        . . . . .
        . . # # .
        . . . . .
        . . . . .
        `)
    basic.clearScreen()
})
input.onGesture(Gesture.FreeFall, function () {
    music.play(music.stringPlayable("C5 C5 C5 - C5 C5 C5 - ", 500), music.PlaybackMode.UntilDone)
    basic.showLeds(`
        . . # . .
        . . # . .
        . . # . .
        . . . . .
        . . # . .
        `)
    basic.clearScreen()
    basic.showLeds(`
        . . # . .
        . . # . .
        . . # . .
        . . . . .
        . . # . .
        `)
    basic.clearScreen()
    basic.showLeds(`
        . . # . .
        . . # . .
        . . # . .
        . . . . .
        . . # . .
        `)
    basic.clearScreen()
})
input.onButtonPressed(Button.A, function () {
    let _1 = 0
    radio.sendNumber(_1)
})
radio.onReceivedString(function (receivedString) {
    basic.showLeds(`
        . . . . .
        . . . . .
        . . . . .
        . . # . .
        . . . . .
        `)
    basic.clearScreen()
})
input.onButtonPressed(Button.B, function () {
    radio.sendString(".-")
})
basic.showString("R.O.D.")
basic.clearScreen()
basic.showString("!BOOTING UP!")
loops.everyInterval(1000, function () {
    basic.showLeds(`
        . . . . #
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        `)
    basic.clearScreen()
})
basic.forever(function () {
    radio.setGroup(142)
    music.setVolume(127)
})
