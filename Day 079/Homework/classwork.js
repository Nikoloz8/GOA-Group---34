// # დაწერეთ count_area ფუნქცია რომელსაც შეეძლება გამოთვალოს ფიგურის ფართობი მართკუთხედისთვის(ინფუთი იქნება 2  რიცხვი) ,  წრისთვის (ინფუთი იქნება 1 მთელი რიცხვი ) და სამკუთხედისთვის (ინფუთი იქნება 3 მთელი რიცხვი)   

function countAreaSquare(a, b){
    return a * b
}

function countAreaCircle(r){
    return Math.pi * (r ** 2) 
}

function countAreaTriangle(a, b, c){
    let s = (a + b + c) / 2
    return Math.sqrt(s * (s - a) * (s - b) * (s - c))
}
