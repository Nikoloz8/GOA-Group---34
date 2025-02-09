# 1) შევქმნათ ფუნქცია, რომელიც დააბრუნებს გადაცემული მატრიცის ( 2D მასივის ) ჯამს. მაგ:
# [[1,3],[1,4], [4,1],[2,2]] —> 18

def d2sum(list):
    sum = 0
    for i in range(len(list)):
        for j in range(len(list[i])):
            sum += list[i][j]
    return sum

print(d2sum([[1, 3], [1, 4], [4, 1], [2, 2]]))


# 2) შევქმნათ ფუნქცია რომელიც გადაცემულ nxn მატრიცას გაუცვლის რიგებს და სვეტებს\
    
list = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
]

def switch(matrix):
    switched_matrix = []
    for j in range(len(matrix)):
        row = []
        for i in range(len(matrix)):
            row.append(matrix[i][j])  
        switched_matrix.append(row)
    return switched_matrix

print(switch(list))

# 3) შევქმნათ ფუნქცია რომელიც გადაცემულდ nXn მატრიცის დიაგონალურად განწყობილი ელემენტების ჯამს დააბრუნებს (უნდა დაბრუნდეს ორი რიცხვი). 

list2 = [
    [10, 2, 20],
    [4, 21, 6],
    [9, 8, 9]
]

def diagonali(list):
    sum1 = 0
    sum2 = 0
    for i in range(len(list)):
        sum1 += list[i][i]
    list.reverse()
    for i in range(len(list)):
        sum2 += list[i][i]
    return sum1, sum2

print(diagonali(list2))

            