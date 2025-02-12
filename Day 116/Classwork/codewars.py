# https://www.codewars.com/kata/555eded1ad94b00403000071/train/python

def series_sum(n):
    if n == 0:
        return "0.00"
    elif n == 1:
        return "1.00"
    else:
        start = 4
        nam = 1
        for i in range(n - 1):
            nam += 1 / start
            start += 3
    nam = round(nam, 2)    
    nam_str = str(nam)
    
    if len(nam_str) == 3:
        return nam_str + "0"
    else:
        return nam_str

