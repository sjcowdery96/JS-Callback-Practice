const inventory = newInventory()
move(inventory).to(0, 0)


const character = newImage('assets/green-character/static.gif')
//move(character).withArrowKeys(100, 250)
move(character).withArrowKeys(100, 250, handleDirectionChange)


//new method adding dynamic image changes based on direction
function handleDirectionChange(direction){
    if(direction === null){
        character.src = 'assets/green-character/static.gif'
    }
    if(direction === 'west'){
        character.src = 'assets/green-character/west.gif'
    }
    if(direction === 'north'){
        character.src = 'assets/green-character/north.gif'
    }
    if(direction === 'east'){
        character.src = 'assets/green-character/east.gif'
    }
    if(direction === 'south'){
        character.src = 'assets/green-character/south.gif'
    }
}

//define a function for creating a random number 
function makeItRandom(max){
    return Math.floor(Math.random() * max) + 1
}

//embleishment function to create a grove of trees 
function createGrove(numberOfTrees, step, bottom, left, spreadX, spreadY){
    for (let i = 0; i < numberOfTrees; i++) {
        //uses the i index to randomly spread out the grove of trees
        move(newImage('assets/tree.png')).to((left + i*step) + makeItRandom(spreadX), (bottom) + makeItRandom(spreadY))
        move(newImage('assets/pine-tree.png')).to((left + i*step) + makeItRandom(spreadX), (bottom) + makeItRandom(spreadY))
      }
}

//create a grove of 20 trees 
createGrove(20,70, 350, 0, 100, 300)

move(newImage('assets/pillar.png')).to(350, 250)
move(newImage('assets/crate.png')).to(150, 350)
move(newImage('assets/well.png')).to(500, 175)
//add items
move(newItem('assets/sword.png')).to(500, 255)
move(newItem('assets/shield.png')).to(165, 335)
move(newItem('assets/staff.png')).to(600, 250)

/*
Comment out -- new function added to move()

//builds a new character and moves him to 100, 250
const character = newImage('assets/green-character/static.gif')
move(character).to(100, 250)
//add variable for holding direction
let direction = null;

let x = 100;
let y = 250;

//assigns directions and pixel movement 
function moveCharacter(){ 
    if(direction === 'west'){
        x = x - 1
    }
    if(direction === 'north'){
        y = y + 1
    }
    if(direction === 'east'){
        x = x + 1
    }
    if(direction === 'south'){
        y = y - 1
    }
    character.style.left = x + 'px'
    character.style.bottom = y + 'px'
}

setInterval(moveCharacter, 1)                                    

//marks the directions based off keys pressed
document.addEventListener('keydown', function(e){
    if(e.repeat) return;

    if(e.key === 'ArrowLeft'){
        direction = 'west'
    }
    if(e.key === 'ArrowUp'){
        direction = 'north'
    }
    if(e.key === 'ArrowRight'){
        direction = 'east'
    }
    if(e.key === 'ArrowDown'){
        direction = 'south'
    }
})
//prevents movement after key is released
document.addEventListener('keyup', function(e){
    direction = null
})

*/


