let Wasserstand = 0
basic.forever(function () {
    Wasserstand = Environment.ReadWaterLevel(AnalogPin.P1)
    if (Wasserstand < 50) {
        basic.showIcon(IconNames.No)
        pins.servoWritePin(AnalogPin.P2, 270)
    } else {
        basic.showIcon(IconNames.House)
        pins.servoWritePin(AnalogPin.P2, 90)
    }
})
