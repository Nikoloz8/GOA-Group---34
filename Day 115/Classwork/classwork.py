# https://www.codewars.com/kata/576b93db1129fcf2200001e6

def sum_array(arr):
    if arr != None:
        arr.sort()
        sum = 0
        for i in range(1, len(arr) - 1):
            sum = sum + arr[i]
        return sum        
    return 0    