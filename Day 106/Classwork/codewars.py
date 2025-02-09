# https://www.codewars.com/kata/5750699bcac40b3ed80001ca/train/python

def match(usefulness, months):
    sum = 0
    picky = 100
    for i in range(len(usefulness)):
        sum += usefulness[i]
    for i in range(months):
        picky -= (picky / 100) * 15 
    if sum >= picky:
        return "Match!"
    else:
        return "No match!"