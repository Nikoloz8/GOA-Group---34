// Codewars Solution

// https://www.codewars.com/kata/57a2013acf1fa5bfc4000921/train/javascript

function findAverage(array) {
    let sum = 0
    if (array.length > 0){
      for (let i = 0; i < array.length; i++){
        sum += array[i]
      }
      return sum / array.length
    } else{
      return 0
    }
  }

// https://www.codewars.com/kata/53dc23c68a0c93699800041d/train/javascript

function smash (words) {
    return words.join(" ")
 };

// https://www.codewars.com/kata/57eadb7ecd143f4c9c0000a3/train/javascript

function abbrevName(name){
    let list = name.split(" ")
    return String(list[0][0]).toUpperCase() + "." + String(list[1][0].toUpperCase()) 
  }

// https://www.codewars.com/kata/5556282156230d0e5e000089/train/javascript

function DNAtoRNA(dna) {
    let string = "";
    for (let i = 0; i < dna.length; i++) {
      if (dna[i] === "T") {
        string += "U";
      } else {
        string += dna[i];
      }
    }
    return string;
  }

// https://www.codewars.com/kata/54ff3102c1bad923760001f3/train/javascript

function getCount(str) {
    let sum = 0;
     for (let i = 0; i < str.length; i++) {
       if (str[i] === "a" || str[i] === "e" || str[i] === "i" || str[i] === "o" || str[i] === "u") {
         sum += 1;
       }
     }
     return sum;
   }