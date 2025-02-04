#Codewars Solutions!

# 1)https://www.codewars.com/kata/587731fda577b3d1b0001196/train/python

def camel_case(s):
    string_list = s.split()
    string = ""
    for i in range(len(string_list)):
        string = string + string_list[i].capitalize()
    return string

# 2)https://www.codewars.com/kata/52b757663a95b11b3d00062d/train/python

def to_weird_case(words):
    string = ""
    words = words.lower()
    list = words.split()
    for i in range(len(list)):
        for j in range(len(list[i])):
            if j % 2 == 1:
                string += list[i][j].lower()
            else:
                string += list[i][j].upper()
        if i != len(list) - 1:
            string = string + " "                
    return string

# 3)https://www.codewars.com/kata/5727bb0fe81185ae62000ae3/train/python

def clean_string(s):
    result = ""
    for char in s:
        if char == "#":
            if len(result) > 0:
                result = result[:-1]
        else:
            result += char
    return result

