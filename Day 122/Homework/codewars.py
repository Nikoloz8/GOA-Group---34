# https://www.codewars.com/kata/5544c7a5cb454edb3c000047/train/python

def bouncing_ball(h, bounce, window):
    if h <= 0 or bounce <= 0 or bounce >= 1 or window >= h:
        return -1

    count = 1
    while True:
        h = h * bounce
        if h > window:
            count += 2
        else:
            break
    return count   