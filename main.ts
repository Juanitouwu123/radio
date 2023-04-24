input.onButtonPressed(Button.A, function () {
    radio.sendString("hola")
})
radio.onReceivedString(function (receivedString) {
    basic.showString(receivedString)
})
radio.setGroup(0)
