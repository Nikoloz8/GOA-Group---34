# 1) შექმენით ფუნქცია რომელსაც მატრიცა (2დ მასივი) X-ების O-ების და ცარიელი სტრინგების. ფუნქციამ უნდა გამოთვალოს ფრეა, თუ რომელამა მოთამაშემ მოიგო თამაში. ( ინფუთი ყოველთვის ვალიდური იქნება )

def winner(board):
    for row in board:
        if row[0] == row[1] == row[2] and row[0] != "":
            return row[0] + " Won!"
    
    for i in range(3):
        if board[0][i] == board[1][i] == board[2][i] and board[0][i] != "":
            return board[0][i] + " Won!"
    
    if board[0][0] == board[1][1] == board[2][2] and board[0][0] != "":
        return board[0][0] + " Won!"
    
    if board[0][2] == board[1][1] == board[2][0] and board[0][2] != "":
        return board[0][2] + " Won!"
    
    for row in board:
        for cell in row:
            if cell == "":
                return "Game is still ongoing"
    
    return "Tie!"



# print(winner([['X', 'O', 'O'], 
#               ['X', 'X', 'O'], 
#               ['', '', '']]))  

# print(winner([['X', 'X', 'X'],
#               ['O', 'O', ''],
#               ['', '', 'O']]))  

# print(winner([['O', 'X', 'X'],
#               ['O', 'O', 'X'], 
#               ['X', 'O', 'O']]))  

# print(winner([['X', 'O', 'X'],
#               ['O', 'O', 'X'], 
#               ['X', 'X', 'O']]))  


# 2) შექმენით ფუნქცია რომელსაც მატრიცა (2დ მასივი) X-ების O-ების და ცარიელი სტრინგების. ფუნქციამ უნდა დაადგინოს რომელი მოთამაშე მოიგებდა "Connrect 4'-ის თამაშში, სიმარტივითვის თქვენ არ გიწევთ დიაგონალურად შემოწმება. ( თუ თამაში არ იცით რესურსებში აღწერას ჩავაგდებ ) ( სირთულე 8/10 ) 

def check_winner(board):
    rows = len(board)
    cols = len(board[0])
    
    for r in range(rows):
        for c in range(cols - 3):
            if board[r][c] != "" and board[r][c] == board[r][c+1] == board[r][c+2] == board[r][c+3]:
                return board[r][c] + " Won!"
    
    for r in range(rows - 3):
        for c in range(cols):
            if board[r][c] != "" and board[r][c] == board[r+1][c] == board[r+2][c] == board[r+3][c]:
                return board[r][c] + " Won!"
    
    for row in board:
        if "" in row:
            return "Game is still ongoing"
    
    return "Tie!"


board = [
    ["", "", "", "", "", "", ""],
    ["", "", "", "", "", "", ""],
    ["", "", "X", "X", "X", "X", ""], 
    ["", "", "O", "O", "X", "O", ""],
    ["", "", "O", "X", "O", "O", ""],
    ["", "X", "O", "O", "X", "X", ""]
]

print(check_winner(board))  # "X Won!"

# 3) შექმენით ფუნქცია რომელიც ამოწმებს თუ ორი გადაცემული არგუმენტის  ნამრავლს იგივე რიცხვები აქვს რაც თვითონ ორ არგუმენტს. ( სირთულე 6/10 )
# მაგ: 6 * 21 = 126 --> true
# მაგ: 10 * 11 = 110
# --> false

def numbers_check(a, b):
    product_str = str(a * b)
    
    ab_str = str(a) + str(b)
    
    for digit in "0123456789":
        count_product = product_str.count(digit)
        count_ab = ab_str.count(digit)
        if count_product != count_ab:
            return False
    
    return True 

print(numbers_check(6, 21))        

# 4) შექმენით ფუნქცია რომელსაც გადაეცემა სტრინგი და აბრუნებს ბულეანს იმის მიხედვით თუ ამ სტრინგში მხოლოდ უნიკალური ასოებია. ( სირთულე 3/10 )

def check_unique(string):
    list = []
    string = string.lower()
    for i in range(len(string)):
        if string.count(string[i]) == 1:
            list.append(string[i])
    return len(list) == len(string)

# print(check_unique("Check"))            
 
# 5) შევქმნათ ფუნქცია რომელიც დააბრუნებს პირველ არა-განმეორებად ასოს რომელიც შეხვდება. ( სირთულე 4/10 )

def non_repeatable(string):
    for i in range(len(string)):
        if string.count(string[i]) == 1:
            return string[i]
