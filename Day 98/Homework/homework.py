# <!-- 1) შექმენით ფუნქცია რომელსაც გადაეცემა მატრიცა ( 2დ მასივი ) და დააბრუნებს მასივს უნიკალური ელემენტებით (ელემენტი რომელიც მთლიან მასივში ერთხელაა)

def one(list):
    arr = []
    unique_list = []
    for i in range(len(list)):
        for j in range(len(list[i])):
            arr.append(list[i][j])
    for i in range(len(arr)):
        if arr.count(arr[i]) == 1:
            unique_list.append(arr[i])
    return unique_list
            
matrix = [
    [1, 2, 3],
    [4, 5, 2],
    [6, 7, 8]
]

print(one(matrix))

# 2) შექმენით ფუნქცია რომელსაც გადაეცემა სტრინგი და დააბრუნებს რომელი ელემენტი (ასო ან ქარაქთერი) ხვდება ყველაზე ხშირად, თუმცა თუ რამოდენიმე ქარაქთერი ერთი და იგივე სიხშირისაა მაშინ მასივში დააბრუნოს ისინი.
# წარმატებები❤️  (მინიშნება: მეორე ამოცანისთვის შეგიძლიათ გამოიყენოთ სიხშირეების მაგიდა, თუმცა სხვა გზებიც არსებობს💜 ) -->

def ratio(string):
    list = []
    indexes = []
    symbols = []
    for i in range(len(string)):
        list.append(string.count(string[i]))
    index = list.index(max(list))
    for i in range(len(list)):
        if list[i] == max(list):
            indexes.append(i)
    for i in range(len(indexes)):
        if symbols.count(string[indexes[i]]) == 0:
            symbols.append(string[indexes[i]])
    return symbols

print(ratio("abbcccddddeeeee"))


