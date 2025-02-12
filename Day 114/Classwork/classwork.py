# 2) გააკეთეთ 'manual' join (py)

def manual_join(list, seperator):
    string = ""
    for i in range(len(list)):
        if i != len(list) - 1:
            string += list[i] + seperator
        else:
            string += list[i]
    return string

lis = ["Hello", "World"]

print(manual_join(lis, " "))



# https://www.codewars.com/kata/5648b12ce68d9daa6b000099/train/python

def number(bus_stops):
    sum1 = 0
    sum2 = 0
    for i in range(len(bus_stops)):
        sum1 = sum1 + bus_stops[i][0]
        sum2 = sum2 + bus_stops[i][1]
    return sum1 - sum2 

# https://www.codewars.com/kata/563e320cee5dddcf77000158/train/python


def get_average(marks):
    sum = 0
    for i in range(len(marks)):
        sum = sum + marks[i]
    return sum // len(marks)

# https://www.codewars.com/kata/57a0885cbb9944e24c00008e/train/python

def remove_exclamation_marks(s):
    list = []
    string = ""
    for i in range(len(s)):
        if s[i] != "!":
            list.append(s[i])
    for i in range(len(list)):
        string = string + list[i]
    return string


# https://www.codewars.com/kata/568d0dd208ee69389d000016/train/python

def rental_car_cost(d):
    if d < 3:
        return d * 40
    elif 2 < d < 7:
        return (d * 40) - 20
    elif d >= 7:
        return (d * 40) - 50