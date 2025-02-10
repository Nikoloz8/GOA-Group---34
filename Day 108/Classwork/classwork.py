# 2) შევქმნათ ფუნქცია რომელიც დააბრუნებს პირველ არა განმეორებად ელემეტს მასივში ან სტრინგში.
# 'hannah' -> false
# 'abbia' -> "i"

def non_repeatable(str):
    for i in range(len(str)):
        if str.count(str[i]) == 1:
            return str[i]
    return False

print(non_repeatable("hannah"))
print(non_repeatable("abbia"))


# 3) ( ვისაც მეორე გაქვთ გაკეთებული ) შევქმნათ ფუნქცია რომელიც იღებს სტრინგს და აბრუნებს ყველაზე გრძელ სტრინგის იმ ნაწილს სადაც ასოები არ მეორდება

def longest(str):
    str1 = ""
    for i in range(len(str)):
        str2 = ""
        for j in range(i, len(str)):
            found = False
            for k in range(len(str2)):
                if str[j] == str2[k]:
                    found = True
                    break
            if found:
                break
            str2 += str[j]
            if len(str2) > len(str1):
                str1 = str2
    return str1

print(longest("abcabcbb"))