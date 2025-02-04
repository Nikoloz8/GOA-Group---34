#Codewars Solutions!


# https://www.codewars.com/kata/54da5a58ea159efa38000836/train/python

def find_it(seq):
    list = []
    for i in range(len(seq)):
        if seq.count(seq[i]) % 2 != 0:
            list.append(seq[i])
    return list[0]

# https://www.codewars.com/kata/523f5d21c841566fde000009/train/python

def array_diff(a, b):
    list = []
    for i in range(len(a)):
        if b.count(a[i]) == 0:
            list.append(a[i])
    return list   

    