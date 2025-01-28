let count = document.getElementById("count")
        
        let input = document.getElementById("input")    
        
        input.oninput = function(){
            count.textContent = input.value.length
            
        }


        function isAlpha(str) {
            for (let i = 0; i < str.length; i++) {
                const char = str[i];
                if (!(char >= 'A' && char <= 'Z') && !(char >= 'a' && char <= 'z')) {
                    return false;
                }
            }
            return true;
        }

        let input1 = document.getElementById("input1")
        let p = document.getElementById("p")

        input1.oninput = function(){
            if (isAlpha(input1.value)){
                p.textContent = "Good"
                p.style.color = "green"
            }else{
                p.textContent = "Error! This is not alpha."
                p.style.color = "red"
            }
        }