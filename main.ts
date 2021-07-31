namespace SpriteKind {
    export const Brick = SpriteKind.create()
}
function getRow (mySprite: Sprite) {
    return Math.floor(mySprite.y / 16)
}
function getCol (mySprite: Sprite) {
    return Math.floor(mySprite.x / 16)
}
controller.B.onEvent(ControllerButtonEvent.Pressed, function () {
    if (bHoldingABrick == 0) {
        if (tiles.tileAtLocationEquals(tiles.getTileLocation(spriteCol - 1, spriteRow), assets.tile`tile4`) && goingLeft == 1) {
            if (tiles.tileAtLocationEquals(tiles.getTileLocation(spriteCol - 1, spriteRow - 1), assets.tile`transparency16`)) {
                tiles.setTileAt(tiles.getTileLocation(spriteCol - 1, spriteRow), assets.tile`transparency16`)
                tiles.setWallAt(tiles.getTileLocation(spriteCol - 1, spriteRow), false)
                brick = sprites.create(img`
                    f f f f f f f f f f f f f f f f 
                    f 1 1 1 1 1 1 1 1 1 1 1 1 1 1 f 
                    f 1 1 1 1 1 1 1 1 1 1 1 1 1 1 f 
                    f 1 1 1 1 1 1 1 1 1 1 1 1 1 1 f 
                    f 1 1 1 1 1 1 1 1 1 1 1 1 1 1 f 
                    f 1 1 1 1 1 1 1 1 1 1 1 1 1 1 f 
                    f 1 1 1 1 1 1 1 1 1 1 1 1 1 1 f 
                    f 1 1 1 1 1 1 1 1 1 1 1 1 1 1 f 
                    f 1 1 1 1 1 1 1 1 1 1 1 1 1 1 f 
                    f 1 1 1 1 1 1 1 1 1 1 1 1 1 1 f 
                    f 1 1 1 1 1 1 1 1 1 1 1 1 1 1 f 
                    f 1 1 1 1 1 1 1 1 1 1 1 1 1 1 f 
                    f 1 1 1 1 1 1 1 1 1 1 1 1 1 1 f 
                    f 1 1 1 1 1 1 1 1 1 1 1 1 1 1 f 
                    f 1 1 1 1 1 1 1 1 1 1 1 1 1 1 f 
                    f f f f f f f f f f f f f f f f 
                    `, SpriteKind.Brick)
                bHoldingABrick = 1
            }
        } else if (tiles.tileAtLocationEquals(tiles.getTileLocation(spriteCol + 1, spriteRow), assets.tile`tile4`) && goingRight == 1) {
            if (tiles.tileAtLocationEquals(tiles.getTileLocation(spriteCol + 1, spriteRow - 1), assets.tile`transparency16`)) {
                tiles.setTileAt(tiles.getTileLocation(spriteCol + 1, spriteRow), assets.tile`transparency16`)
                tiles.setWallAt(tiles.getTileLocation(spriteCol + 1, spriteRow), false)
                brick = sprites.create(img`
                    f f f f f f f f f f f f f f f f 
                    f 1 1 1 1 1 1 1 1 1 1 1 1 1 1 f 
                    f 1 1 1 1 1 1 1 1 1 1 1 1 1 1 f 
                    f 1 1 1 1 1 1 1 1 1 1 1 1 1 1 f 
                    f 1 1 1 1 1 1 1 1 1 1 1 1 1 1 f 
                    f 1 1 1 1 1 1 1 1 1 1 1 1 1 1 f 
                    f 1 1 1 1 1 1 1 1 1 1 1 1 1 1 f 
                    f 1 1 1 1 1 1 1 1 1 1 1 1 1 1 f 
                    f 1 1 1 1 1 1 1 1 1 1 1 1 1 1 f 
                    f 1 1 1 1 1 1 1 1 1 1 1 1 1 1 f 
                    f 1 1 1 1 1 1 1 1 1 1 1 1 1 1 f 
                    f 1 1 1 1 1 1 1 1 1 1 1 1 1 1 f 
                    f 1 1 1 1 1 1 1 1 1 1 1 1 1 1 f 
                    f 1 1 1 1 1 1 1 1 1 1 1 1 1 1 f 
                    f 1 1 1 1 1 1 1 1 1 1 1 1 1 1 f 
                    f f f f f f f f f f f f f f f f 
                    `, SpriteKind.Brick)
                bHoldingABrick = 1
            }
        } else if (tiles.tileAtLocationEquals(tiles.getTileLocation(spriteCol + 1, spriteRow), assets.tile`tile4`)) {
            tiles.setTileAt(tiles.getTileLocation(spriteCol + 1, spriteRow), assets.tile`transparency16`)
            tiles.setWallAt(tiles.getTileLocation(spriteCol + 1, spriteRow), false)
            brick = sprites.create(img`
                f f f f f f f f f f f f f f f f 
                f 1 1 1 1 1 1 1 1 1 1 1 1 1 1 f 
                f 1 1 1 1 1 1 1 1 1 1 1 1 1 1 f 
                f 1 1 1 1 1 1 1 1 1 1 1 1 1 1 f 
                f 1 1 1 1 1 1 1 1 1 1 1 1 1 1 f 
                f 1 1 1 1 1 1 1 1 1 1 1 1 1 1 f 
                f 1 1 1 1 1 1 1 1 1 1 1 1 1 1 f 
                f 1 1 1 1 1 1 1 1 1 1 1 1 1 1 f 
                f 1 1 1 1 1 1 1 1 1 1 1 1 1 1 f 
                f 1 1 1 1 1 1 1 1 1 1 1 1 1 1 f 
                f 1 1 1 1 1 1 1 1 1 1 1 1 1 1 f 
                f 1 1 1 1 1 1 1 1 1 1 1 1 1 1 f 
                f 1 1 1 1 1 1 1 1 1 1 1 1 1 1 f 
                f 1 1 1 1 1 1 1 1 1 1 1 1 1 1 f 
                f 1 1 1 1 1 1 1 1 1 1 1 1 1 1 f 
                f f f f f f f f f f f f f f f f 
                `, SpriteKind.Brick)
            bHoldingABrick = 1
        } else if (tiles.tileAtLocationEquals(tiles.getTileLocation(spriteCol - 1, spriteRow), assets.tile`tile4`)) {
            tiles.setTileAt(tiles.getTileLocation(spriteCol - 1, spriteRow), assets.tile`transparency16`)
            tiles.setWallAt(tiles.getTileLocation(spriteCol - 1, spriteRow), false)
            brick = sprites.create(img`
                f f f f f f f f f f f f f f f f 
                f 1 1 1 1 1 1 1 1 1 1 1 1 1 1 f 
                f 1 1 1 1 1 1 1 1 1 1 1 1 1 1 f 
                f 1 1 1 1 1 1 1 1 1 1 1 1 1 1 f 
                f 1 1 1 1 1 1 1 1 1 1 1 1 1 1 f 
                f 1 1 1 1 1 1 1 1 1 1 1 1 1 1 f 
                f 1 1 1 1 1 1 1 1 1 1 1 1 1 1 f 
                f 1 1 1 1 1 1 1 1 1 1 1 1 1 1 f 
                f 1 1 1 1 1 1 1 1 1 1 1 1 1 1 f 
                f 1 1 1 1 1 1 1 1 1 1 1 1 1 1 f 
                f 1 1 1 1 1 1 1 1 1 1 1 1 1 1 f 
                f 1 1 1 1 1 1 1 1 1 1 1 1 1 1 f 
                f 1 1 1 1 1 1 1 1 1 1 1 1 1 1 f 
                f 1 1 1 1 1 1 1 1 1 1 1 1 1 1 f 
                f 1 1 1 1 1 1 1 1 1 1 1 1 1 1 f 
                f f f f f f f f f f f f f f f f 
                `, SpriteKind.Brick)
            bHoldingABrick = 1
        }
    } else {
        if (tiles.tileAtLocationEquals(tiles.getTileLocation(spriteCol - 1, spriteRow), assets.tile`transparency16`) && goingLeft == 1) {
            setCol(brick, getCol(mySprite) - 1)
            setRow(brick, getRow(mySprite) - 1)
            blockCounter = 0
            while (tiles.tileAtLocationEquals(tiles.getTileLocation(getCol(mySprite) - 1, getRow(mySprite) + blockCounter), assets.tile`transparency16`)) {
                blockCounter = 1 + blockCounter
            }
            tiles.setTileAt(tiles.getTileLocation(spriteCol - 1, spriteRow + (blockCounter - 1)), assets.tile`tile4`)
            tiles.setWallAt(tiles.getTileLocation(spriteCol - 1, spriteRow + (blockCounter - 1)), true)
            bHoldingABrick = 0
            brick.destroy()
        } else if (tiles.tileAtLocationEquals(tiles.getTileLocation(spriteCol + 1, spriteRow), assets.tile`transparency16`) && goingRight == 1) {
            setCol(brick, getCol(mySprite) + 1)
            setRow(brick, getRow(mySprite) - 1)
            while (tiles.tileAtLocationEquals(tiles.getTileLocation(getCol(mySprite) + 1, getRow(mySprite) + blockCounter), assets.tile`transparency16`)) {
                blockCounter = 1 + blockCounter
            }
            tiles.setTileAt(tiles.getTileLocation(spriteCol + 1, spriteRow + (blockCounter - 1)), assets.tile`tile4`)
            tiles.setWallAt(tiles.getTileLocation(spriteCol + 1, spriteRow + (blockCounter - 1)), true)
            blockCounter = 0
            bHoldingABrick = 0
            brick.destroy()
        } else if (tiles.tileAtLocationEquals(tiles.getTileLocation(spriteCol - 1, spriteRow - 1), assets.tile`transparency16`) && goingLeft == 1) {
            tiles.setTileAt(tiles.getTileLocation(spriteCol - 1, spriteRow - 1), assets.tile`tile4`)
            tiles.setWallAt(tiles.getTileLocation(spriteCol - 1, spriteRow - 1), true)
            bHoldingABrick = 0
            brick.destroy()
        } else if (tiles.tileAtLocationEquals(tiles.getTileLocation(spriteCol + 1, spriteRow - 1), assets.tile`transparency16`) && goingRight == 1) {
            tiles.setTileAt(tiles.getTileLocation(spriteCol + 1, spriteRow - 1), assets.tile`tile4`)
            tiles.setWallAt(tiles.getTileLocation(spriteCol + 1, spriteRow - 1), true)
            bHoldingABrick = 0
            brick.destroy()
        }
    }
})
controller.left.onEvent(ControllerButtonEvent.Pressed, function () {
    if (goingLeft == 1) {
        if (tiles.tileAtLocationEquals(tiles.getTileLocation(spriteCol - 1, spriteRow), assets.tile`transparency16`)) {
            mySprite.x += -16
        } else if (tiles.tileAtLocationEquals(tiles.getTileLocation(spriteCol - 1, spriteRow - 1), assets.tile`transparency16`) || tiles.tileAtLocationEquals(tiles.getTileLocation(spriteCol - 1, spriteRow - 1), assets.tile`tile5`)) {
            mySprite.x += -16
            mySprite.y += -16
        }
    }
    mySprite.setImage(img`
        . . . . f f f f f f . . . . . . 
        . . . f 2 f e e e e f f . . . . 
        . . f 2 2 2 f e e e e f f . . . 
        . . f e e e e f f e e e f . . . 
        . f e 2 2 2 2 e e f f f f . . . 
        . f 2 e f f f f 2 2 2 e f . . . 
        . f f f e e e f f f f f f f . . 
        . f e e 4 4 f b e 4 4 e f f . . 
        . . f e d d f 1 4 d 4 e e f . . 
        . . . f d d d d 4 e e e f . . . 
        . . . f e 4 4 4 e e f f . . . . 
        . . . f 2 2 2 e d d 4 . . . . . 
        . . . f 2 2 2 e d d e . . . . . 
        . . . f 5 5 4 f e e f . . . . . 
        . . . . f f f f f f . . . . . . 
        . . . . . . f f f . . . . . . . 
        `)
    goingRight = 0
    goingLeft = 1
})
function setCol (Sprite2: Sprite, col: number) {
    Sprite2.y = col * 16
}
controller.right.onEvent(ControllerButtonEvent.Pressed, function () {
    if (goingRight == 1) {
        if (tiles.tileAtLocationEquals(tiles.getTileLocation(spriteCol + 1, spriteRow), assets.tile`transparency16`)) {
            mySprite.x += 16
        } else if (tiles.tileAtLocationEquals(tiles.getTileLocation(spriteCol + 1, spriteRow - 1), assets.tile`transparency16`)) {
            mySprite.x += 16
            mySprite.y += -16
        }
    }
    mySprite.setImage(img`
        . . . . . . f f f f f f . . . . 
        . . . . f f e e e e f 2 f . . . 
        . . . f f e e e e f 2 2 2 f . . 
        . . . f e e e f f e e e e f . . 
        . . . f f f f e e 2 2 2 2 e f . 
        . . . f e 2 2 2 f f f f e 2 f . 
        . . f f f f f f f e e e f f f . 
        . . f f e 4 4 e b f 4 4 e e f . 
        . . f e e 4 d 4 1 f d d e f . . 
        . . . f e e e 4 d d d d f . . . 
        . . . . f f e e 4 4 4 e f . . . 
        . . . . . 4 d d e 2 2 2 f . . . 
        . . . . . e d d e 2 2 2 f . . . 
        . . . . . f e e f 4 5 5 f . . . 
        . . . . . . f f f f f f . . . . 
        . . . . . . . f f f . . . . . . 
        `)
    goingRight = 1
    goingLeft = 0
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`tile5`, function (sprite, location) {
    mySprite.destroy()
    selectedLevel = selectedLevel + 1
    startLevel(selectedLevel)
})
function setRow (Sprite2: Sprite, row: number) {
    Sprite2.y = row * 16
}
controller.menu.onEvent(ControllerButtonEvent.Pressed, function () {
    selectedLevel = selectedLevel + 1
    mySprite.destroy()
    startLevel(selectedLevel)
})
function startLevel (level: number) {
    if (level == 1) {
        tiles.setTilemap(tilemap`level_3`)
    } else if (level == 2) {
        tiles.setTilemap(tilemap`level_baby_1`)
    } else if (level == 3) {
        tiles.setTilemap(tilemap`level_baby_5`)
    } else if (level == 4) {
        tiles.setTilemap(tilemap`level_baby_3`)
    } else if (level == 5) {
        tiles.setTilemap(tilemap`level_baby_4`)
    } else if (level == 6) {
        tiles.setTilemap(tilemap`level_baby_2`)
    } else if (level == 7) {
        tiles.setTilemap(tilemap`level_baby_6`)
    } else if (level == 8) {
        tiles.setTilemap(tilemap`level_4`)
    } else if (level == 9) {
        tiles.setTilemap(tilemap`level_5`)
    } else if (level == 10) {
        tiles.setTilemap(tilemap`level_6`)
    } else if (level == 11) {
        tiles.setTilemap(tilemap`level_7`)
    } else if (level == 12) {
        tiles.setTilemap(tilemap`level_8`)
    } else if (level == 13) {
        tiles.setTilemap(tilemap`level_9`)
    }
    bHoldingABrick = 0
    mySprite = sprites.create(img`
        . . . . . . f f f f . . . . . . 
        . . . . f f f 2 2 f f f . . . . 
        . . . f f f 2 2 2 2 f f f . . . 
        . . f f f e e e e e e f f f . . 
        . . f f e 2 2 2 2 2 2 e e f . . 
        . . f e 2 f f f f f f 2 e f . . 
        . . f f f f e e e e f f f f . . 
        . f f e f b f 4 4 f b f e f f . 
        . f e e 4 1 f d d f 1 4 e e f . 
        . . f e e d d d d d d e e f . . 
        . . . f e e 4 4 4 4 e e f . . . 
        . . e 4 f 2 2 2 2 2 2 f 4 e . . 
        . . 4 d f 2 2 2 2 2 2 f d 4 . . 
        . . 4 4 f 4 4 5 5 4 4 f 4 4 . . 
        . . . . . f f f f f f . . . . . 
        . . . . . f f . . f f . . . . . 
        `, SpriteKind.Player)
    tiles.placeOnRandomTile(mySprite, assets.tile`tile3`)
    scene.cameraFollowSprite(mySprite)
    for (let value of tiles.getTilesByType(assets.tile`tile3`)) {
        tiles.setTileAt(value, assets.tile`transparency16`)
    }
    for (let value2 of tiles.getTilesByType(assets.tile`tile1`)) {
        tiles.setTileAt(value2, assets.tile`tile4`)
        tiles.setWallAt(value2, true)
    }
    for (let value3 of tiles.getTilesByType(assets.tile`tile2`)) {
        tiles.setTileAt(value3, assets.tile`tile5`)
    }
    game.splash("Level " + convertToText(level))
}
let blockCounter = 0
let mySprite: Sprite = null
let brick: Sprite = null
let goingRight = 0
let goingLeft = 0
let spriteRow = 0
let spriteCol = 0
let bHoldingABrick = 0
let selectedLevel = 0
scene.setBackgroundColor(1)
selectedLevel = 1
startLevel(selectedLevel)
game.onUpdate(function () {
    if (controller.A.isPressed() && controller.B.isPressed()) {
        bHoldingABrick = 0
        mySprite.destroy()
        for (let value4 of sprites.allOfKind(SpriteKind.Brick)) {
            value4.destroy()
        }
        startLevel(selectedLevel)
    }
    spriteCol = Math.floor(mySprite.x / 16)
    spriteRow = Math.floor(mySprite.y / 16)
    console.logValue("X position", spriteCol)
    console.logValue("Y position", spriteRow)
    console.logValue("Brick", bHoldingABrick)
    if (bHoldingABrick == 1) {
        brick.setPosition(mySprite.x, mySprite.y - 16)
    }
    if (mySprite.tileKindAt(TileDirection.Bottom, sprites.builtin.brick) || mySprite.tileKindAt(TileDirection.Bottom, assets.tile`tile4`)) {
    	
    } else {
        mySprite.y += 16
    }
})
