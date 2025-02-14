# https://www.codewars.com/kata/52c31f8e6605bcc646000082/train/python

def two_sum(numbers, target):
    
    for i in range(len(numbers)):
        for j in range(len(numbers)):
            if numbers[j] + numbers[i] == target:
                if i != j:
                    return (i, j)   