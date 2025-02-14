# // 2) შექმენით ფუნქცია, რომელიც მასივიდან დუბლიკატ ელემენტებს წაშლის და ახალ უნიკალურ მასივს დააბრუნებს.

def seter(list1):
    arr = []
    
    def count(list, element):
        counter = 0
        for i in range(len(list1)):
            if list[i] == element:
                counter += 1
        return counter
    
    for i in range(len(list1)):
        if count(list1, list1[i]) == 1:
            arr.append(list1[i]) 
    
    return arr
     

(print(seter([1, 2, 2, 3, 4, 4, 5])))