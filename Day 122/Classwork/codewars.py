# https://www.codewars.com/kata/559590633066759614000063/train/python

def min_max(lst):
    lst.sort()
    return [lst[0], lst[-1]]

# https://www.codewars.com/kata/56f6ad906b88de513f000d96/train/python

def bonus_time(salary, bonus):
    if bonus == True:
        return "$" + str(salary * 10)
    else:
        return "$" + str(salary)
    
# https://www.codewars.com/kata/54bf85e3d5b56c7a05000cf9/train/python

def number(lines):
    for i in range(1, len(lines) + 1):
        if lines[i - 1] == "":
            lines[i - 1] = f"{i}: "
        else:
            lines[i - 1] = f"{i}: {lines[i - 1]}"
    return lines

# https://www.codewars.com/kata/5412509bd436bd33920011bc/train/python

def maskify(cc):
    return "#" * (len(cc) - 4) + cc[-4:]

# https://www.codewars.com/kata/56b1f01c247c01db92000076/train/python

def double_char(s):
    string = ""
    for i in range(len(s)):
        string = string + s[i] * 2
    return string