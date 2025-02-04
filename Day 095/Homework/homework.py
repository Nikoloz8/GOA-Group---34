# შექმენი ფუნქცია რომელიც გადაცემული მასივიდან ამოიღებს ყველაზე გრძელ იმ ნაწილს სადაც რიცხვები ზრდის მიხედვითაა დალაგებული, მაგ მასივში [1,2,3,1,2,3,4] ზრდის მიხედვით ყველაზე გრძელი ნაწილი არის [1,2,3,4] ( მასივის ბოლო 4 ელემენტი). მეორე მაგ: [1,2,1,3,16,21,11], ყველაზე გრძელი მასივის ნაწილი არის [16,21,11] რომელიც ზრდის მიხედვით იზდება. 

def longest(arr):
    if not arr:
        return []

    longest_seq = []
    current_seq = [arr[0]]

    for i in range(1, len(arr)):
        if arr[i] > arr[i - 1]:
            current_seq.append(arr[i])
        else:
            if len(current_seq) > len(longest_seq):
                longest_seq = current_seq
            current_seq = [arr[i]]

    if len(current_seq) > len(longest_seq):
        longest_seq = current_seq

    return longest_seq

arr1 = [1, 2, 3, 1, 2, 3, 4]
arr2 = [1, 2, 1, 3, 16, 21, 11]
    
print(longest(arr1)) 
print(longest(arr2))  
