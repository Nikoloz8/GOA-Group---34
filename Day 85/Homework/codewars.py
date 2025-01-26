# ეცადეთ გამოოიყენოთ მინიმალური ჩაშენებული ფუნქციები და ამოხსნათ მაქსიმალურად "ლოუ-ლეველზე". წარმატებები❤️

# https://www.codewars.com/kata/55908aad6620c066bc00002a/python

def xo(s):
    s1 = s.lower()
    x_count = 0
    o_count = 0

    for char in s1:
        if char == 'x':
            x_count += 1
        elif char == 'o':
            o_count += 1

    return x_count == o_count


#or


def xo(s):
    s = s.lower()
    return s.count("x") == s.count("o")

