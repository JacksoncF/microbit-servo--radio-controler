input.onButtonPressed(Button.A, function () {
    radio.sendString("" + (WALK_1))
})
radio.onReceivedString(function (receivedString) {
    if (receivedString == WALK_1) {
        servos.P0.run(50)
    }
    if (receivedString == WALK_2) {
        servos.P0.run(50)
    }
})
input.onButtonPressed(Button.B, function () {
    radio.sendString("" + (WALK_2))
})
let WALK_2 = ""
let WALK_1 = ""
radio.setGroup(82)
