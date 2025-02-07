# https://www.codewars.com/kata/54e6533c92449cc251001667/train/python

def unique_in_order(sequence):
    result = [] 
    previous_item = None 
    for item in sequence:
        if item != previous_item:
            result.append(item)
            previous_item = item  
    return result