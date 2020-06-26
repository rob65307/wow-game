namespace SpriteKind {
    export const Ball = SpriteKind.create()
    export const changerVert = SpriteKind.create()
    export const changeDiag = SpriteKind.create()
    export const changeAround = SpriteKind.create()
    export const green = SpriteKind.create()
    export const yellow = SpriteKind.create()
}
sprites.onOverlap(SpriteKind.Projectile, SpriteKind.yellow, function (sprite, otherSprite) {
    otherSprite.setImage(img`
. . . . . . . . . . 
. . . 2 2 2 2 . . . 
. . 2 2 2 2 2 2 . . 
. 2 2 2 2 2 2 2 2 . 
. 2 2 2 2 2 2 2 2 . 
. 2 2 2 2 2 2 2 2 . 
. 2 2 2 2 2 2 2 2 . 
. . 2 2 2 2 2 2 . . 
. . . 2 2 2 2 . . . 
. . . . . . . . . . 
`)
    pause(500)
    otherSprite.setKind(SpriteKind.Ball)
})
sprites.onOverlap(SpriteKind.Projectile, SpriteKind.changeAround, function (sprite, otherSprite) {
	
})
sprites.onOverlap(SpriteKind.Projectile, SpriteKind.changerVert, function (sprite, otherSprite) {
	
})
function projClear (startCharger: Sprite) {
	
}
sprites.onOverlap(SpriteKind.Player, SpriteKind.changeAround, function (sprite, otherSprite) {
    if (controller.A.isPressed()) {
        aroundRing = sprites.create(img`
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 . . . 
. . . 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 . . . 
. . . 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 . . . 
. . . 9 9 9 . . . . . . . . . . . . . . . . . . 9 9 9 . . . 
. . . 9 9 9 . . . . . . . . . . . . . . . . . . 9 9 9 . . . 
. . . 9 9 9 . . . . . . . . . . . . . . . . . . 9 9 9 . . . 
. . . 9 9 9 . . . . . . . . . . . . . . . . . . 9 9 9 . . . 
. . . 9 9 9 . . . . . . . . . . . . . . . . . . 9 9 9 . . . 
. . . 9 9 9 . . . . . . . . . . . . . . . . . . 9 9 9 . . . 
. . . 9 9 9 . . . . . . . . . . . . . . . . . . 9 9 9 . . . 
. . . 9 9 9 . . . . . . . . . . . . . . . . . . 9 9 9 . . . 
. . . 9 9 9 . . . . . . . . . . . . . . . . . . 9 9 9 . . . 
. . . 9 9 9 . . . . . . . . . . . . . . . . . . 9 9 9 . . . 
. . . 9 9 9 . . . . . . . . . . . . . . . . . . 9 9 9 . . . 
. . . 9 9 9 . . . . . . . . . . . . . . . . . . 9 9 9 . . . 
. . . 9 9 9 . . . . . . . . . . . . . . . . . . 9 9 9 . . . 
. . . 9 9 9 . . . . . . . . . . . . . . . . . . 9 9 9 . . . 
. . . 9 9 9 . . . . . . . . . . . . . . . . . . 9 9 9 . . . 
. . . 9 9 9 . . . . . . . . . . . . . . . . . . 9 9 9 . . . 
. . . 9 9 9 . . . . . . . . . . . . . . . . . . 9 9 9 . . . 
. . . 9 9 9 . . . . . . . . . . . . . . . . . . 9 9 9 . . . 
. . . 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 . . . 
. . . 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 . . . 
. . . 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
`, SpriteKind.Projectile)
        aroundRing.setPosition(otherSprite.x, otherSprite.y)
        pause(200)
        aroundRing.destroy()
    }
})
controller.left.onEvent(ControllerButtonEvent.Pressed, function () {
    if (mySprite.x >= 10) {
        mySprite.x += -10
    }
})
controller.down.onEvent(ControllerButtonEvent.Pressed, function () {
    if (mySprite.y <= 110) {
        mySprite.y += 10
    }
})
function CreateSpace (x: number, y: number) {
    balls = sprites.create(img`
. . . . . . . . . . 
. . . 2 2 2 2 . . . 
. . 2 2 2 2 2 2 . . 
. 2 2 2 2 2 2 2 2 . 
. 2 2 2 2 2 2 2 2 . 
. 2 2 2 2 2 2 2 2 . 
. 2 2 2 2 2 2 2 2 . 
. . 2 2 2 2 2 2 . . 
. . . 2 2 2 2 . . . 
. . . . . . . . . . 
`, SpriteKind.Ball)
    balls.setPosition(x, y)
}
sprites.onOverlap(SpriteKind.Player, SpriteKind.changeDiag, function (sprite, otherSprite) {
    if (controller.A.isPressed()) {
        projectile2 = sprites.createProjectileFromSprite(img`
. 9 9 . 
9 9 9 9 
9 9 9 9 
. 9 9 . 
`, otherSprite, 30, 30)
        projectile2 = sprites.createProjectileFromSprite(img`
. 9 9 . 
9 9 9 9 
9 9 9 9 
. 9 9 . 
`, otherSprite, -30, 30)
        projectile2 = sprites.createProjectileFromSprite(img`
. 9 9 . 
9 9 9 9 
9 9 9 9 
. 9 9 . 
`, otherSprite, 30, -30)
        projectile2 = sprites.createProjectileFromSprite(img`
. 9 9 . 
9 9 9 9 
9 9 9 9 
. 9 9 . 
`, otherSprite, -30, -30)
        pause(200)
    }
})
sprites.onOverlap(SpriteKind.Projectile, SpriteKind.green, function (sprite, otherSprite) {
    otherSprite.setImage(img`
. . . . . . . . . . 
. . . 5 5 5 5 . . . 
. . 5 5 5 5 5 5 . . 
. 5 5 5 5 5 5 5 5 . 
. 5 5 5 5 5 5 5 5 . 
. 5 5 5 5 5 5 5 5 . 
. 5 5 5 5 5 5 5 5 . 
. . 5 5 5 5 5 5 . . 
. . . 5 5 5 5 . . . 
. . . . . . . . . . 
`)
    pause(500)
    otherSprite.setKind(SpriteKind.yellow)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.changerVert, function (sprite, otherSprite) {
    if (controller.A.isPressed()) {
        projectile2 = sprites.createProjectileFromSprite(img`
. 9 9 . 
9 9 9 9 
9 9 9 9 
. 9 9 . 
`, otherSprite, 50, 0)
        projectile2 = sprites.createProjectileFromSprite(img`
. 9 9 . 
9 9 9 9 
9 9 9 9 
. 9 9 . 
`, otherSprite, -50, 0)
        projectile2 = sprites.createProjectileFromSprite(img`
. 9 9 . 
9 9 9 9 
9 9 9 9 
. 9 9 . 
`, otherSprite, 0, 50)
        projectile2 = sprites.createProjectileFromSprite(img`
. 9 9 . 
9 9 9 9 
9 9 9 9 
. 9 9 . 
`, otherSprite, 0, -50)
        pause(200)
    }
})
function CreateMap () {
    for (let index = 0; index < 12; index++) {
        for (let index2 = 0; index2 <= 15; index2++) {
            if (Math.randomRange(0, 4) == 0) {
                CreateChanger(10 * index2 + 5, 10 * CreateCol + 5)
            } else {
                CreateSpace(10 * index2 + 5, 10 * CreateCol + 5)
            }
        }
        CreateCol += 1
    }
}
controller.right.onEvent(ControllerButtonEvent.Pressed, function () {
    if (mySprite.x <= 150) {
        mySprite.x += 10
    }
})
function CreateChanger (x: number, y: number) {
    if (Math.randomRange(0, 2) == 0) {
        changer = sprites.create(img`
. . . . . . . . . . 
. a a a f f a a a . 
. a a a f f a a a . 
. a a a f f a a a . 
. f f f f f f f f . 
. f f f f f f f f . 
. a a a f f a a a . 
. a a a f f a a a . 
. a a a f f a a a . 
. . . . . . . . . . 
`, SpriteKind.changerVert)
        changer.setPosition(x, y)
    } else if (Math.randomRange(0, 2) == 1) {
        changer = sprites.create(img`
. . . . . . . . . . 
. f f a a a a f f . 
. f f f a a f f f . 
. a f f f f f f a . 
. a a f f f f a a . 
. a a f f f f a a . 
. a f f f f f f a . 
. f f f a a f f f . 
. f f a a a a f f . 
. . . . . . . . . . 
`, SpriteKind.changeDiag)
        changer.setPosition(x, y)
    } else {
        changer = sprites.create(img`
. . . . . . . . . . 
. a a a a a a a a . 
. a f f f f f f a . 
. a f f f f f f a . 
. a f f a a f f a . 
. a f f a a f f a . 
. a f f f f f f a . 
. a f f f f f f a . 
. a a a a a a a a . 
. . . . . . . . . . 
`, SpriteKind.changeAround)
        changer.setPosition(x, y)
    }
}
sprites.onOverlap(SpriteKind.Projectile, SpriteKind.changeDiag, function (sprite, otherSprite) {
	
})
controller.up.onEvent(ControllerButtonEvent.Pressed, function () {
    if (mySprite.y >= 10) {
        mySprite.y += -10
    }
})
sprites.onOverlap(SpriteKind.Projectile, SpriteKind.Ball, function (sprite, otherSprite) {
    otherSprite.setImage(img`
. . . . . . . . . . 
. . . 7 7 7 7 . . . 
. . 7 7 7 7 7 7 . . 
. 7 7 7 7 7 7 7 7 . 
. 7 7 7 7 7 7 7 7 . 
. 7 7 7 7 7 7 7 7 . 
. 7 7 7 7 7 7 7 7 . 
. . 7 7 7 7 7 7 . . 
. . . 7 7 7 7 . . . 
. . . . . . . . . . 
`)
    pause(500)
    otherSprite.setKind(SpriteKind.green)
})
let changer: Sprite = null
let projectile2: Sprite = null
let balls: Sprite = null
let aroundRing: Sprite = null
let mySprite: Sprite = null
let CreateCol = 0
scene.setBackgroundColor(1)
CreateMap()
CreateCol = 0
mySprite = sprites.create(img`
4 4 4 4 4 4 4 4 4 4 
4 4 4 4 4 4 4 4 4 4 
4 4 . . . . . . 4 4 
4 4 . . . . . . 4 4 
4 4 . . . . . . 4 4 
4 4 . . . . . . 4 4 
4 4 . . . . . . 4 4 
4 4 . . . . . . 4 4 
4 4 4 4 4 4 4 4 4 4 
4 4 4 4 4 4 4 4 4 4 
`, SpriteKind.Player)
mySprite.setPosition(5, 5)
