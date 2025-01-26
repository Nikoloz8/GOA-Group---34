#codewars solutions!

# https://www.codewars.com/kata/55f8a9c06c018a0d6e000132

def validate_pin(pin):
    return len(pin) == 4 and pin.isdigit() or len(pin) == 6 and pin.isdigit()

# https://www.codewars.com/kata/5264d2b162488dc400000001

def spin_words(sentence):
    words = sentence.split() 
    for i in range(len(words)):
        if len(words[i]) > 4:
            words[i] = words[i][::-1] 
    return ' '.join(words) 

# https://www.codewars.com/kata/514b92a657cdc65150000006

def solution(number):
    sum = 0
    for i in range(number):
        if i % 3 == 0 or i % 5 == 0:
            sum += i
    return sum

# https://www.codewars.com/kata/5420fc9bb5b2c7fd57000004

def highest_rank(arr):
    counts = {}  
    for num in arr:
        if num in counts: 
            counts[num] += 1
        else:
            counts[num] = 1  
    most_frequent = max(counts.values()) 
    candidates = []
    for num, count in counts.items():
        if count == most_frequent:
            candidates.append(num) 
    return max(candidates)  

# https://www.codewars.com/kata/515decfd9dcfc23bb6000006

def is_valid_IP(strng):
    list1 = strng.split(".")
    list2 = []
    if len(list1) == 4:
        for i in range(len(list1)):
            if list1[i].isdigit():
                if 0 <= int(list1[i]) <= 255:
                    if not (list1[i][0] == "0" and len(list1[i]) > 1):
                        list2.append(list1[i])
        return len(list1) == len(list2)
    return False

# https://www.codewars.com/kata/554b4ac871d6813a03000035

def high_and_low(numbers):
    numbers_splited = numbers.split()
    list = []
    for i in range(len(numbers_splited)):
        list.append(int(numbers_splited[i]))
    list.sort()
    return str(list[len(list) - 1]) + " " + str(list[0])