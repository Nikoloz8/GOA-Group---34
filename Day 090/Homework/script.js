// 1) შექმენით მანუალური სორტის ფუნქცია

function manualSort(arr) {
  let sortedArray = [];

  while (arr.length > 0) {
    let smallest = Math.min(...arr);
    sortedArray.push(smallest);
    arr.splice(arr.indexOf(smallest), 1);
  }

  return sortedArray;
}

console.log(manualSort([2, 6, 1, 9, 1])); // Output: [1, 1, 2, 6, 9]


console.log(manualSort([2, 6, 1, 9, 1]))
  
// 2) შექმენით მანუალური ფილტრის ფუნქცია ( ფუნქცია რომელსაც გადაეცდემა ორი არგუმენტი, მასივი და ინტეჯერი რომლის ქვემოთ მყოფი რიცხვებიც უნდა ამოიღოს მასივიდან )

function manualFilter(arr, num){
    let list = []
    for (let i = 0; i < arr.length; i++){
        if (arr[i] > num){
            list.push(arr[i])
        }
    }
    return list
}

console.log(manualFilter([5, 1, 3, 9, 7], 5))