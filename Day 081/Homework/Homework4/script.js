let p = document.getElementById("text")

let btn = document.getElementById("button")

let size = 16

let isNot48 = true

btn.onclick = function(){
    let interval = setInterval(function(){
        if(isNot48){
            if (size < 48){
                p.style.fontSize = size + "px"
                size++
            }else{
                isNot48 = false
            }
        } else{
            if (size > 16){
                p.style.fontSize = size + "px"
                size--
            } else{
                isNot48 = true
                clearInterval(interval)
            }
        }
    }, 50)
}