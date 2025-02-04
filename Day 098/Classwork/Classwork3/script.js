// 3) შექმენით ფუნქცია რომელსაც გადაეცემა სტრინგი და აბრუნებს სიხშირეების ცხრილს.

function ratio(str){
    let obj = {}
    function count(st, s){
        let x = 0
        for (let i = 0; i < st.length; i++){
            if(str[i] === s){
                x += 1
            }
        }
        return x
    }
    for (let i = 0; i < str.length; i++){
        obj[`${str[i]}`] = count(str, str[i])
    }
    return obj
}

console.log(ratio("SASISAQISJIDAIFBUeyfiEGWQUIFHIOEWHQFIOuoi uqhewbpo buqvopiqunewop"))