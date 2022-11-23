control.onEvent(EventBusSource.MICROBIT_ID_BUTTON_A, EventBusValue.MICROBIT_BUTTON_EVT_DOWN, function () {
    basic.showNumber(Math.round(Math.map(pins.analogReadPin(AnalogPin.P0), 3, 1023, 0, 100)))
})
basic.forever(function () {
	
})
