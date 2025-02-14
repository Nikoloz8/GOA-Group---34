# https://www.codewars.com/kata/5a2fd38b55519ed98f0000ce/train/python

def multi_table(number):
    string = []  
    for i in range(1, 11):
        string.append(f"{i} * {number} = {i * number}")  
    return "\n".join(string)  


# https://www.codewars.com/kata/5acbc3b3481ebb23a400007d/train/python

def is_flush(cards):
    list = []
    list2 = []
    for i in range(len(cards)):
        list.append(cards[i][-1])
    for i in range(len(list)):
        list2.append(list.count(list[i]))
    for i in range(len(list2)):
        if list2[i] >= 5:
            return True
    return False


# https://www.codewars.com/kata/58f5c63f1e26ecda7e000029/train/python

def wave(people):
    result = []  
    for i in range(len(people)):  
        if people[i] != ' ':  
            new_string = people[:i] + people[i].upper() + people[i+1:]
            result.append(new_string)  
    return result  
