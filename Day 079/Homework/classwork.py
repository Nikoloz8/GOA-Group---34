# დაწერეთ count_area ფუნქცია რომელსაც შეეძლება გამოთვალოს ფიგურის ფართობი მართკუთხედისთვის(ინფუთი იქნება 2  რიცხვი) ,  წრისთვის (ინფუთი იქნება 1 მთელი რიცხვი ) და სამკუთხედისთვის (ინფუთი იქნება 3 მთელი რიცხვი)   


def count_area_square(a, b):
    return a * b

import math

def count_area_circle(r):
    return math.pi * (r ** 2)


def count_area_triangle(a, b, c):
    s = (a + b + c) / 2
    return math.sqrt(s * (s - a) * (s - b) * (s - c))
    
