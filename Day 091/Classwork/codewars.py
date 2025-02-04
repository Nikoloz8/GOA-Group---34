# https://www.codewars.com/kata/5a34da5dee1aae516d00004a/train/python

def get_matrix(n):
    list = []
    for i in range(n):
        row = []
        for l in range(n):
            if i == l:
                row.append(1)
            else:
                row.append(0)
        list.append(row)
    return list 