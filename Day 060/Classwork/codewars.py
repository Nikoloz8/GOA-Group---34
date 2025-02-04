#Codewars Solutions!

# 1) https://www.codewars.com/kata/55f2b110f61eb01779000053'

def get_sum(a,b):  
    sum = 0
    if a > b:
        for i in range(b, a + 1):
            sum += i
    elif b > a:
        for i in range(a, b + 1):
            sum += i
    elif a == b:
        return a
    return sum

# 2) https://www.codewars.com/kata/54bf85e3d5b56c7a05000cf9/train/python

def number(lines):
    for i in range(1, len(lines) + 1):
        if lines[i - 1] == "":
            lines[i - 1] = f"{i}: "
        else:
            lines[i - 1] = f"{i}: {lines[i - 1]}"
    return lines

# 3) https://www.codewars.com/kata/545cedaa9943f7fe7b000048/train/python

def is_pangram(st):
    counter = 0
    st = st.lower()
    a_z = "abcdefghijklmnopqrstuvwxyz"
    for i in range(len(a_z)):
        if st.count(a_z[i]) > 0:
            counter = counter + 1
    return counter == 26

# 4) https://www.codewars.com/kata/576757b1df89ecf5bd00073b/train/python

def tower_builder(n_floors):
    tower = []
    for i in range(1, n_floors + 1):
        stars = "*" * (2 * i - 1)  
        spaces = " " * (n_floors - i) 
        tower.append(spaces + stars + spaces)  
    return tower