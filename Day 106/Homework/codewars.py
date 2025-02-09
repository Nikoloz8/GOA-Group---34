# https://www.codewars.com/kata/529b418d533b76924600085d/train/javascript

def to_underscore(strng: str) -> str:
    strng = str(strng)  
    result = strng[0].lower()  
    for i in range(1, len(strng)):  
        if strng[i] == strng[i].upper():  
            if strng[i].isdigit():
                result += strng[i].lower()  
            else:
                result += "_" + strng[i].lower()  
        else:
            result += strng[i].lower()  
    return result  

# https://www.codewars.com/kata/580a4734d6df748060000045/train/javascript

def is_sorted_and_how(arr):
    if arr == sorted(arr):
        return "yes, ascending"
    elif arr == sorted(arr, reverse=True):  
        return "yes, descending"
    else:
        return "no"
    


# https://www.codewars.com/kata/59dc8288fc3c49cc3f000039/train/javascript
  
  
 #JS 
  
# function sort(initialArray, sortingArray) {
#   for (let i = 0; i < initialArray.length; i++) {
#     if (sortingArray[i] !== i) {
#       let correctIndex = sortingArray[i];
#       let temp = initialArray[i];
#       initialArray[i] = initialArray[correctIndex];
#       initialArray[correctIndex] = temp;
#       temp = sortingArray[i];
#       sortingArray[i] = sortingArray[correctIndex];
#       sortingArray[correctIndex] = temp;
#       i--;
#     }
#   }
#   return initialArray;