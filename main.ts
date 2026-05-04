let hungryness = 0
basic.forever(function () {
    if (input.buttonIsPressed(Button.A)) {
        hungryness = hungryness + 3
        basic.showNumber(hungryness)
    } else if (input.buttonIsPressed(Button.B)) {
        hungryness = 0
    }
})
