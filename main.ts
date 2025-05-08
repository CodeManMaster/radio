radio.onReceivedNumber(function (receivedNumber) {
    if (true) {
        basic.showNumber(1)
    }
})
input.onButtonPressed(Button.A, function () {
    let _1 = 0
    radio.sendNumber(_1)
})
basic.forever(function () {
    radio.setGroup(142)
})
