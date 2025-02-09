# 2) შექმენით პროგრამა რომელელიც მომხამრებელს შეამოაყვანინებს ორ რიცხვს და გამოიტანს მათ ნამრავლს, თუ მომხმარებელმა ოპერაციის შემდეგ შეიყვანა 'exit' მაშინ გამოიყვანეთ ის პროგრამიდან თუ არადა გააგრძელეთ სანამ მომხმარებელი 'exit'-ს არ შეიყვანს 



num1 = input("Enter num1: ")
num2 = input("Enter num2: ")
exit = input("Exit? : ")

while exit.lower() != "exit":
    num1 = input("Enter num1: ")
    num2 = input("Enter num2: ")
    print(int(num1) * int(num2))
    exit = input("Exit? : ")
    
    