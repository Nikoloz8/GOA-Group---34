# https://www.codewars.com/kata/578fdcfc75ffd1112c0001a1/train/python

def bin_rota(arr):
    list = []
    for i in range(len(arr)):
        if i % 2 == 1:
            droebit = arr[i]
            droebit.reverse()
            for j in range(len(droebit)):
                list.append(droebit[j])
        else:
            for j in range(len(arr[i])):
                list.append(arr[i][j])
    return list


# https://www.codewars.com/kata/56f3f6a82010832b02000f38/solutions/python

# def describe_age(a):return f"You're a(n) {'kid' if a<=12else'teenager' if a<=17else'adult' if a<=64else'elderly'}"


