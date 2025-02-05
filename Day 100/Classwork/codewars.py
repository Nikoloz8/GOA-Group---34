#Codewars Solutions!

# https://www.codewars.com/kata/541c8630095125aba6000c00/train/python

def digital_root(n):
    while n >= 10: 
        digits = list(str(n))  
        digits_sum = 0  
        for digit in digits:
            digits_sum = digits_sum + int(digit)  
        n = digits_sum 
    return n  

# https://www.codewars.com/kata/515de9ae9dcfc28eb6000001/train/python

def solution(s):
    list = []
    string = ""
    for i in range(len(s)):
        string = string + s[i]
        if len(string) == 2:
            list.append(string)
            string = ""
        if i == len(s) - 1 and len(string) == 1:
            string = string + "_"
            list.append(string)
    return list

# https://www.codewars.com/kata/5266876b8f4bf2da9b000362/train/python

def likes(names):
    if names == []:
        return "no one likes this"
    else:
        string = ""
        if len(names) == 1:
            return names[0] + " likes this"
        elif len(names) == 2:
            return names[0] + " and " + names[1] + " like this"
        elif len(names) == 3:
            return names[0] + ", " + names[1] + " and " + names[2]  +" like this"
        else:
            return names[0] + ", " + names[1] + " and " + str(len(names) - 2) + " others like this"
        
        
# https://www.codewars.com/kata/55bf01e5a717a0d57e0000ec/train/python
        
def persistence(n):
    steps = 0
    while len(str(n)) > 1:
        product = 1
        for digit in str(n):
            product *= int(digit)
        n = product
        steps += 1
    return steps     