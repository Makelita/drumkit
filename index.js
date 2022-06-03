let keys = document.querySelectorAll('.set')

document.addEventListener("keypress", function(e){
    if(e.code === "KeyW"){
        let sound = new Audio("sounds/crash.mp3")
        return sound.play()
    } else if(e.code === "KeyA") {
        let sound = new Audio("sounds/kick-bass.mp3")
        return sound.play()
    }else if(e.code === "KeyS") {
        let sound = new Audio("sounds/snare.mp3")
        return sound.play()
    }else if(e.code === "KeyD") {
        let sound = new Audio("sounds/tom-1.mp3")
        return sound.play()
    }else if(e.code === "KeyJ") {
        let sound = new Audio("sounds/tom-2.mp3")
        return sound.play()
    }else if(e.code === "KeyK") {
        let sound = new Audio("sounds/tom-3.mp3")
        return sound.play()
    }else if(e.code === "KeyL") {
        let sound = new Audio("sounds/tom-4.mp3")
        return sound.play()
    }

})






