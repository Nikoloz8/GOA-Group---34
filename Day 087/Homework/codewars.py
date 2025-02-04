#codewars solutions!

# https://www.codewars.com/kata/52efefcbcdf57161d4000091/train/python

def count(s):
    character_count = {}
    for char in s:
        if char in character_count:
            character_count[char] += 1
        else:
            character_count[char] = 1
    return character_count

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

# https://www.codewars.com/kata/5259b20d6021e9e14c0010d4/train/python

def reverse_words(text):
    words = text.split(' ')
    for i in range(len(words)):
        words[i] = words[i][::-1]  
    return ' '.join(words)  
