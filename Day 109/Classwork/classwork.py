# 2) შექმენით ფუნქცია რომელსაც გადაეცემა მინ 2 და მაქსიმუმ უთვალავი ელემენტი, პირველი არგუმენტი უნდა იყყოს ფუნქცია და დანარჩენი არგუმენტი ინტეჯერები, მაგ func(add, 1,7,2,1), add, minus, mulitply


def add():
    sum = 0
    for i in range(len(list)):
        sum += list[i]


def minus(list):
    sum = 0
    for i in range(len(list)):
        sum -= list[i]

def mult(list):
    sum = 0
    for i in range(len(list)):
        sum *= list[i]



def min2(func, list):
    return func(list)

print(min2(minus(), [1, 2, 3]))
    