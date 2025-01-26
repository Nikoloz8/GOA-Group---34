# 1) ხელით შეავსეთ 5-ელემენტიანი მთელი რიცხვების მასივი და გამობეჭდეთ მე-2 და მე-4 ინდექსზე მყოფი ელემენტები.

list = [1, 2, 3, 4, 5]

print(list[2], list[4])

# 2) შემოგდით ჯერ N - შესატანი რიცხვების რაოდენობა, შემდეგ კი N ცალი რიცხვი. შეავსეთ მასივი (0 დან) შეყვანილი რიცხვებით და გამობეჭდეთ კენტ ინდექსზე მყოფი ელემენტები ( a[1], a[3], a[5]...)

def odd_list(n):
    list1 = []
    list2 = []
    for i in range(n):
        list1.append(i)
    for i in range(len(list1)):
        if i % 2 == 1:
            list2.append(list1[i])
    return list2

print(odd_list(10))            
    

# 3) აღწერეთ 10 ელემენტიანი მთელი რიცხვების მასივი, შეიყვანეთ კონსოლიდან 10 ელემენტი (for-ით), მასივში არსებული რიცხვები გააორმაგეთ და გამობეჭდეთ ეკრანზე

a = []

print("შეიყვანეთ 10 მთელი რიცხვი:")
for i in range(10):
    num = int(input(f"რიცხვი {i+1}: "))  
    a.append(num)  
for i in range(10):
    a[i] = a[i] * 2  

list = []

for num in a:
    list.append(num)
print(list)

# 4) შემოგდით ჯერ N - შესატანი რიცხვების რაოდენობა, შემდეგ კი N ცალი რიცხვი. შეინახეთ რიცხვები მასივში და გამობეჭდეთ შებრუნებული თანმიმდევრობით. (მაგ: თუ რიცხვებია 5 7 12, გამობეჭდეთ 12, 7, 5)

def reversed_list(n):
    lst = []  
    for i in range(n):
        lst.append(int(input("Enter number: ")))
    lst.reverse()  
    return lst 

# print(reversed_list(2))     

# 5) შემოგდით N, შემდეგ N ცალი რიცხვი. შეინახეთ მასივში, ადგილი გაუცვალეთ პირველ და ბოლო ელემენტს, და მასივი გამობეჭდეთ ეკრანზე.

def reversed_list1(n):
    lst = []  
    for i in range(n):
        lst.append(int(input("Enter number: ")))  
    first = lst[0]
    last = lst[-1]
    lst[0] = last
    lst[-1] = first
    return lst 


print(reversed_list1(5))
