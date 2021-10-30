input.onButtonPressed(Button.A, function () {
    timer += 1
})
input.onButtonPressed(Button.AB, function () {
    timer = 0
    count_down = false
})
input.onButtonPressed(Button.B, function () {
    count_down = true
})
let count_down = false
let timer = 0
timer = 0
count_down = false
basic.forever(function () {
    basic.showNumber(timer)
    if (count_down == true) {
        basic.pause(1000)
        timer += -1
        if (timer <= 1) {
            count_down = false
        }
    }
})
