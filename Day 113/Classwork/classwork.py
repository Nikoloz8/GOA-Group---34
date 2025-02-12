# https://www.codewars.com/kata/55225023e1be1ec8bc000390/train/python

def greet(name):
    if name == "Johnny":
        return "Hello, my love!"
    else:
        return "Hello, {name}!".format(name=name)
    
# https://www.codewars.com/kata/51c8991dee245d7ddf00000e/train/python

def reverse_words(s):
    splited_s = s.split()
    splited_s.reverse()
    reversed_s = ""
    for i in range(len(splited_s)):
        if i > 0:
            reversed_s = reversed_s + " " + splited_s[i]
        if i == 0:
            reversed_s = reversed_s + splited_s[i]
    return reversed_s

