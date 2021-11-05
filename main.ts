function タイマー時間分表示 () {
    basic.showNumber(タイマー時間分)
}
function ticktackクリア () {
    for (let ticktack_y = 0; ticktack_y <= 2; ticktack_y++) {
        for (let ticktack_x = 0; ticktack_x <= 4; ticktack_x++) {
            led.unplot(ticktack_x, ticktack_y)
        }
    }
}
input.onButtonPressed(Button.A, function () {
    if (!(タイマー時間分 == 0)) {
        タイマー時間分 += -1
        タイマー時間分表示()
    }
    if (true) {
        flag = 1
    }
})
function tictack表示 (数値: number) {
    ticktack_x = 数値 % 5 - 1
    if (ticktack_x == -1) {
        ticktack_x = 4
    }
    ticktack_y = Math.ceil(数値 / 5) - 1
    led.plot(ticktack_x, ticktack_y)
}
input.onGesture(Gesture.Shake, function () {
    flag = 1
})
function bon表示 (数値: number) {
    ticktackクリア()
    分_x = 数値 % 5 - 1
    if (分_x == -1) {
        分_x = 4
    }
    分_y = Math.ceil(数値 / 5) + 2
    led.plot(分_x, 分_y)
}
input.onButtonPressed(Button.AB, function () {
    basic.clearScreen()
    flag = 0
    LEDの数 = 12
    タイマー時間秒 = タイマー時間分 * 60
    ticktickを進める秒数 = 60 / LEDの数
    bon秒 = 60
    ticktack = 0
    while (ticktack < タイマー時間秒) {
        if (flag == 1) {
            break;
        }
        basic.pause(1000)
        ticktack += 1
        if (ticktack % ticktickを進める秒数 == 0) {
            tictack表示(ticktack % bon秒 / ticktickを進める秒数)
        }
        if (ticktack % bon秒 == 0) {
            bon表示(ticktack / bon秒)
        }
    }
    for (let index = 0; index < 4; index++) {
        basic.showIcon(IconNames.SmallHeart)
        basic.showIcon(IconNames.Heart)
    }
})
input.onButtonPressed(Button.B, function () {
    if (!(タイマー時間分 == 9)) {
        タイマー時間分 += 1
        タイマー時間分表示()
    }
})
let ticktack = 0
let bon秒 = 0
let ticktickを進める秒数 = 0
let タイマー時間秒 = 0
let LEDの数 = 0
let 分_y = 0
let 分_x = 0
let ticktack_y = 0
let ticktack_x = 0
let flag = 0
let タイマー時間分 = 0
タイマー時間分 = 0
タイマー時間分表示()
