let 哈哈 = game.createSprite(randint(0, 3), randint(0, 3))
let 哭哭 = game.createSprite(4, 4)
basic.forever(function () {
    basic.pause(500)
    if (500 < input.acceleration(Dimension.X)) {
        哭哭.change(LedSpriteProperty.X, 1)
    }
    if (input.acceleration(Dimension.X) < -500) {
        哭哭.change(LedSpriteProperty.X, -1)
    }
    if (500 < input.acceleration(Dimension.Y)) {
        哭哭.change(LedSpriteProperty.Y, 1)
    }
    if (input.acceleration(Dimension.Y) < -500) {
        哭哭.change(LedSpriteProperty.Y, -1)
    }
    if (哈哈.isTouching(哭哭)) {
        game.gameOver()
    }
})
