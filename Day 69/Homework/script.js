// Here are five sets of exercises, each related to the array methods and properties you provided. The last set combines multiple methods for more advanced tasks.

// ---

// ## **Exercise Set 1: Basics (Array Length, toString, at, join, pop, push)**
// 1. **Get Length**: Create an array with 5 items. Log the length of the array.

let list = [1, 2, 3, 4, 5]

console.log(list.length)

// 2. **Convert to String**: Convert the same array to a string using `toString()` and log the result.

console.log(list.toString())

// 3. **Access Element**: Use the `at()` method to access the second element and log it.

console.log(list.at(1))

// 4. **Join Elements**: Use `join()` to combine the array elements with `-` between them.

console.log(list.join("-"))

// 5. **Push & Pop**: Add two new elements to the array using `push()`, then remove the last element using `pop()`.

list.push(6)
list.push(7)
list.pop()

console.log(list)


// ## **Exercise Set 2: Modify Array (shift, unshift, delete, concat)**
// 1. **Shift Element**: Create an array and remove the first element using `shift()`.

list.shift()
console.log(list)

// 2. **Unshift Element**: Add a new element at the beginning using `unshift()`.

list.unshift(9)
console.log(list)

// 3. **Delete Element**: Use the `delete` operator to remove the second element. Log the array and observe the result.

delete list[1]
console.log(list)

// 4. **Concatenate Arrays**: Create two arrays and use `concat()` to merge them.

let list1 = [1, 2, 3]
let list2 = [4, 2, 6]

let list3 = list1.concat(list2)
console.log(list3)

// 5. **Explore Unshift & Length**: After using `unshift()`, log the new length of the array.

let array = [1, 2, 3]

array.unshift(5)

console.log(array)

// ## **Exercise Set 3: Searching (indexOf, lastIndexOf, includes)**
// 1. **Find Index**: Create an array with repeated values. Use `indexOf()` to find the first occurrence of an element.

let array1 = [1, 2, 1, 1, 3, 7]

console.log(array1.indexOf(1))

// 2. **Find Last Index**: Use `lastIndexOf()` to find the last occurrence of the same element.

console.log(array1.lastIndexOf(1))

// 3. **Check Inclusion**: Use `includes()` to check if a specific element exists in the array.

console.log(array.includes(1))

// 4. **Invalid Index Search**: Use `indexOf()` to search for a non-existing element. Log the result.

console.log(array1.indexOf(0))

// 5. **Case Sensitivity**: Check if `includes()` is case-sensitive by searching for different cases of the same string.

let stringArr = ["Sopia", "Sasisqi"]

console.log(stringArr.includes("sopia"))

// ## **Exercise Set 4: Sorting and Reversing (sort, reverse)**
// 1. **Sort Strings**: Create an array of strings and sort them using `sort()`.

let stringArray = ["a", "c", "d", "b"]

console.log(stringArray.sort())

// 2. **Sort Numbers**: Create an array of numbers and sort them in ascending order.

console.log(array1.sort())

// 3. **Custom Sort**: Use a custom comparison function to sort numbers in descending order.

let list6 = [1, 5, 1, 2, 6, 8]

console.log(list6.sort((a, b) => b - a))

// 4. **Reverse Array**: Use `reverse()` on a sorted array and log the result.

console.log(list6.reverse())

// 5. **Mix Sort and Reverse**: Sort an array, then reverse it.

const list5 = [1, 5, 2, 1, 9, 3, 6]

list5.sort()
list5.reverse()

console.log(list5)

// ---

// ## **Exercise Set 5: Combined Operations**
// 1. **Sort and Push**: Create an array of numbers, sort it, and add a new number using `push()`. Log the updated array.


list5.push(29)
console.log(list5)

// 2. **Concatenate and Sort**: Create two arrays, merge them with `concat()`, and sort the result.

console.log(list1.concat(list3).sort())

// 3. **Push and Reverse**: Add three new elements to an array, then reverse the entire array.

let array3 = [1, 2, 3, 4, 1, 2, 1]

array3.push(21)
array3.push(1)
array3.push(4)
console.log(array3.reverse())

// 4. **Find and Remove Element**: Use `indexOf()` to locate an element, then use `splice()` to remove it.

let a = array3.indexOf(1)
let b = array3.splice(a, a)

console.log(array3)

// 5. **Join and Include Check**: Join the elements of an array into a string, split it back into an array, and check if a specific value is included using `includes()`.

let test = [1, 2, 3]

let tester = test.join(".")

console.log(tester)

let testerer = tester.split(".")

console.log(testerer)

console.log(testerer.includes('1'))
