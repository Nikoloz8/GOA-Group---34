# https://www.codewars.com/kata/568dcc3c7f12767a62000038/train/python

def set_alarm(employed, vacation):
    if employed == True and vacation == False:
        return True
    else:
        return False

# https://www.codewars.com/kata/550498447451fbbd7600041c/train/python

def comp(arr1, arr2):  
    if arr1 is None or arr2 is None:  
        return False  

    squares = []  
    for num in arr1:  
        squares.append(num * num)  

    squares.sort()  
    arr2.sort()  

    if squares == arr2:  
        return True  
    else:  
        return False  
    
    
# https://www.codewars.com/kata/58649884a1659ed6cb000072/train/python

def update_light(current):
    g = "green"
    y = "yellow"
    r = "red"
    if current == g:
        return y
    elif current == y:
        return r
    else:
        return g
