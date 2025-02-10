# https://www.codewars.com/kata/6071ef9cbe6ec400228d9531/train/javascript

def calculator(txt):
    text = txt.split()
    sum = 0
    text_sum = ""
    first = text[0].count(".")
    operator = text[1]
    second = text[2].count(".")
    if operator == "+":
        sum = first + second
        for i in range(sum):
            text_sum = text_sum + "."
    elif operator == "-":
        sum = first - second
        for i in range(sum):
            text_sum = text_sum + "."
    elif operator == "*":
        sum = first * second
        for i in range(sum):
            text_sum = text_sum + "."
    elif operator == "//":
        sum = first // second
        for i in range(sum):
            text_sum = text_sum + "."
    return text_sum            