input.onButtonPressed(Button.A, function () {
    basic.showString("STEPS: 0")
    STEPS = 0
})
input.onButtonPressed(Button.B, function () {
    basic.showString("I LOVE YOU MAMA!")
})
input.onGesture(Gesture.Shake, function () {
    STEPS += 1
    basic.showNumber(STEPS)
})
let STEPS = 0
basic.showString("STEPS: 0")
STEPS = 0
