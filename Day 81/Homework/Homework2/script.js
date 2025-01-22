let div = document.getElementById("block")

let btn = document.getElementById("btn")

let pos = 500

btn.onclick = function(){
    let interval = setInterval(function(){
        if (pos > -1){
            div.style.right = pos + "px"
            pos--
        } 
    }, 0)
}