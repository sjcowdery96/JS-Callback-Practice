function move(element) {
    element.style.position = 'fixed'

    function moveToCoordinates(left, bottom) {
        element.style.left = left + 'px'
        element.style.bottom = bottom + 'px'
    }
    //brand new function for movement created with the character
    function moveWithArrowKeys(left, bottom, callback){
        let direction = null;
        let x = left;
        let y = bottom;
    
        element.style.left = x + 'px'
        element.style.bottom = y + 'px'
        
        function moveCharacter(){ 
            if(direction === 'west'){
                x-=1
            }
            if(direction === 'north'){
                y+=1
            }
            if(direction === 'east'){
                x+=1
            }
            if(direction === 'south'){
                y-=1
            }
            element.style.left = x + 'px'
            element.style.bottom = y + 'px'

            //added if player is beyond 350px he appears behind the other objects 
            if(y>450){
                element.style.zIndex = -3
            }
            else {
                element.style.zIndex = 3
            }
        }
        
        setInterval(moveCharacter, 1)
        
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
            //runs the function for updating image
            if(callback!=null){
                callback(direction)
            }
        })
        
        document.addEventListener('keyup', function(e){
            direction = null
            if(callback!=null){
                callback(direction)
            }
        })
    }
    

    return {
        //attaches these functions to the calls
        to: moveToCoordinates,
        withArrowKeys: moveWithArrowKeys
    }
}