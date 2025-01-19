// Codewars Solution

// https://www.codewars.com/kata/551b4501ac0447318f0009cd/train/javascript

function booleanToString(b){
    if (b == true){
      return "true"
    } else{
      return 'false'
    }
  }

// https://www.codewars.com/kata/5583090cbe83f4fd8c000051/train/javascript

function digitize(n) {
    let list = []
    let string = String(n)
    for(let i = string.length - 1; i >= 0; i--){
      list.push(Number(string[i]))
    }
    return list
  }

// https://www.codewars.com/kata/55cbd4ba903825f7970000f5/train/javascript

function getGrade(s1, s2, s3) {
    const score = (s1 + s2 + s3) / 3;
    
    if (score >= 90 && score <= 100) {
        return "A";
    } else if (score >= 80 && score < 90) {
        return "B";
    } else if (score >= 70 && score < 80) {
        return "C";
    } else if (score >= 60 && score < 70) {
        return "D";
    } else {
        return "F";
    }
}


// https://www.codewars.com/kata/5ab6538b379d20ad880000ab/train/javascript

const areaOrPerimeter = function(l , w) {
    if (l == w){
      return l * w
    } else{
      return 2 * l + 2 * w
    }
  };

// https://www.codewars.com/kata/554e4a2f232cdd87d9000038/train/javascript

function dnaStrand(dna){
    let string = "";
    
    for (let i = 0; i < dna.length; i++) {
        if (dna[i] === "A") {
            string += "T";
        } else if (dna[i] === "T") {
            string += "A";
        } else if (dna[i] === "C") {
            string += "G";
        } else if (dna[i] === "G") {
            string += "C";
        }
    }
    
    return string;
}

// https://www.codewars.com/kata/5259b20d6021e9e14c0010d4/train/javascript

function reverseWords(str) {
    let list = str.split(" "); 
    
    for (let i = 0; i < list.length; i++) {
      let reversedWord = "";
      for (let j = list[i].length - 1; j >= 0; j--) {
        reversedWord += list[i][j]; 
      }
      list[i] = reversedWord;
    }
    return list.join(" ");  
  }

// https://www.codewars.com/kata/546e2562b03326a88e000020/train/javascript

function squareDigits(num){
    let string1 = String(num)
    let string2 = ""
    for(let i = 0; i < string1.length; i++){
      string2 += String(Number(string1[i] ** 2))
    }
    
    return Number(string2)
  }

// https://www.codewars.com/kata/5390bac347d09b7da40006f6/train/javascript

String.prototype.toJadenCase = function () {
    let words = this.split(" ");
    let result = "";
    for (let i = 0; i < words.length; i++) {
      let firstLetter = words[i][0].toUpperCase();
      let restOfWord = "";
      for (let j = 1; j < words[i].length; j++) {
        restOfWord += words[i][j].toLowerCase();
      }
      words[i] = firstLetter + restOfWord;
      result += words[i];
  
      if (i < words.length - 1) {
        result += " ";
      }
    }
    return result;
  };