# https://www.codewars.com/kata/5a2fd38b55519ed98f0000ce/train/python

def multi_table(number):
    num2 = number * 2 
    num3 = number * 3 
    num4 = number * 4 
    num5 = number * 5 
    num6 = number * 6 
    num7 = number * 7 
    num8 = number * 8 
    num9 = number * 9
    num10 = number * 10
    return "1 * " + str(number) + " = " + str(number) + "\n2 * " +  str(number) + " = " + str(num2) + "\n3 * " +  str(number) + " = " + str(num3) + "\n4 * " +  str(number) + " = " + str(num4) + "\n5 * " +  str(number) + " = " + str(num5) + "\n6 * " +  str(number) + " = " + str(num6) + "\n7 * " +  str(number) + " = " + str(num7) + "\n8 * " +  str(number) + " = " + str(num8) + "\n9 * " +  str(number) + " = " + str(num9) + "\n10 * " +  str(number) + " = " + str(num10)

# https://www.codewars.com/kata/5acbc3b3481ebb23a400007d/train/python

def is_flush(cards):
    list = []
    list2 = []
    for i in range(len(cards)):
        list.append(cards[i][-1])
    for i in range(len(list)):
        list2.append(list.count(list[i]))
    for i in range(len(list2)):
        if list2[i] >= 5:
            return True
    return False


# https://www.codewars.com/kata/58f5c63f1e26ecda7e000029/train/python

def wave(people):
    result = []  
    for i in range(len(people)):  
        if people[i] != ' ':  
            new_string = people[:i] + people[i].upper() + people[i+1:]
            result.append(new_string)  
    return result  
