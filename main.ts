namespace SpriteKind {
    export const Ball = SpriteKind.create()
    export const changerVert = SpriteKind.create()
    export const changeDiag = SpriteKind.create()
    export const changeAround = SpriteKind.create()
    export const green = SpriteKind.create()
    export const yellow = SpriteKind.create()
    export const destroyable = SpriteKind.create()
    export const shuffler = SpriteKind.create()
}
function shuffle () {
    for (let index = 0; index < 20; index++) {
        if (Math.randomRange(0, 1) == 0) {
            shuffler.setPosition(Math.randomRange(1, 12) * 10 + 2, -5)
            shuffler.setVelocity(0, 100)
            pause(1000)
        } else {
            shuffler.setPosition(-5, Math.randomRange(1, 16) * 10 + 2)
            shuffler.setVelocity(100, 0)
            pause(1000)
        }
    }
}
sprites.onOverlap(SpriteKind.destroyable, SpriteKind.green, function (sprite, otherSprite) {
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
`, SpriteKind.destroyable)
        aroundRing.setPosition(otherSprite.x, otherSprite.y)
        pause(200)
        aroundRing.destroy()
    }
})
sprites.onOverlap(SpriteKind.shuffler, SpriteKind.changeAround, function (sprite, otherSprite) {
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
`, SpriteKind.destroyable)
        aroundRing.setPosition(otherSprite.x, otherSprite.y)
        pause(200)
        aroundRing.destroy()
    }
})
sprites.onOverlap(SpriteKind.shuffler, SpriteKind.changeDiag, function (sprite, otherSprite) {
    striggerProjDia(otherSprite)
    pause(100)
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
function striggerProjDia (charger: Sprite) {
    projectile2 = sprites.createProjectileFromSprite(img`
. 9 9 . 
9 9 9 9 
9 9 9 9 
. 9 9 . 
`, charger, 30, 30)
    pause(150)
    projectile2.setKind(SpriteKind.destroyable)
    projectile2 = sprites.createProjectileFromSprite(img`
. 9 9 . 
9 9 9 9 
9 9 9 9 
. 9 9 . 
`, charger, -30, 30)
    pause(150)
    projectile2.setKind(SpriteKind.destroyable)
    projectile2 = sprites.createProjectileFromSprite(img`
. 9 9 . 
9 9 9 9 
9 9 9 9 
. 9 9 . 
`, charger, 30, -30)
    pause(150)
    projectile2.setKind(SpriteKind.destroyable)
    projectile2 = sprites.createProjectileFromSprite(img`
. 9 9 . 
9 9 9 9 
9 9 9 9 
. 9 9 . 
`, charger, -30, -30)
    pause(150)
    projectile2.setKind(SpriteKind.destroyable)
    pause(200)
}
sprites.onOverlap(SpriteKind.Player, SpriteKind.changeDiag, function (sprite, otherSprite) {
    if (controller.A.isPressed()) {
        striggerProjDia(otherSprite)
    }
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.changerVert, function (sprite, otherSprite) {
    if (controller.A.isPressed()) {
        striggerProj(otherSprite)
    }
})
function CreateMap () {
    chargerStartList = []
    for (let index = 0; index < 12; index++) {
        for (let index2 = 0; index2 <= 15; index2++) {
            if (Math.randomRange(0, 4) == 0) {
                CreateChanger(10 * index2 + 5, 10 * CreateCol + 5)
                chargerStartList.push(Math.randomRange(0, 2))
            } else {
                CreateSpace(10 * index2 + 5, 10 * CreateCol + 5)
                chargerStartList.push(-1)
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
sprites.onOverlap(SpriteKind.destroyable, SpriteKind.yellow, function (sprite, otherSprite) {
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
function striggerProj (changer: Sprite) {
    projectile2 = sprites.createProjectileFromSprite(img`
. 9 9 . 
9 9 9 9 
9 9 9 9 
. 9 9 . 
`, changer, 50, 0)
    pause(100)
    projectile2.setKind(SpriteKind.destroyable)
    projectile2 = sprites.createProjectileFromSprite(img`
. 9 9 . 
9 9 9 9 
9 9 9 9 
. 9 9 . 
`, changer, -50, 0)
    pause(100)
    projectile2.setKind(SpriteKind.destroyable)
    projectile2 = sprites.createProjectileFromSprite(img`
. 9 9 . 
9 9 9 9 
9 9 9 9 
. 9 9 . 
`, changer, 0, 50)
    pause(100)
    projectile2.setKind(SpriteKind.destroyable)
    projectile2 = sprites.createProjectileFromSprite(img`
. 9 9 . 
9 9 9 9 
9 9 9 9 
. 9 9 . 
`, changer, 0, -50)
    pause(100)
    projectile2.setKind(SpriteKind.destroyable)
    pause(200)
}
sprites.onOverlap(SpriteKind.shuffler, SpriteKind.changerVert, function (sprite, otherSprite) {
    striggerProj(otherSprite)
    pause(100)
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
sprites.onOverlap(SpriteKind.destroyable, SpriteKind.changeDiag, function (sprite, otherSprite) {
    sprite.destroy()
})
sprites.onOverlap(SpriteKind.destroyable, SpriteKind.changeAround, function (sprite, otherSprite) {
    sprite.destroy()
})
controller.up.onEvent(ControllerButtonEvent.Pressed, function () {
    if (mySprite.y >= 10) {
        mySprite.y += -10
    }
})
sprites.onOverlap(SpriteKind.destroyable, SpriteKind.Ball, function (sprite, otherSprite) {
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
sprites.onOverlap(SpriteKind.destroyable, SpriteKind.changerVert, function (sprite, otherSprite) {
    sprite.destroy()
})
let changer: Sprite = null
let chargerStartList: number[] = []
let projectile2: Sprite = null
let balls: Sprite = null
let aroundRing: Sprite = null
let shuffler: Sprite = null
let mySprite: Sprite = null
let CreateCol = 0
scene.setBackgroundColor(1)
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
shuffler = sprites.create(img`
2 2 
2 2 
`, SpriteKind.shuffler)
shuffler.setPosition(-5, -5)
CreateMap()
shuffle()
