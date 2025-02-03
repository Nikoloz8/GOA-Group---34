// 1) შექმენით ობიექტი და გამოიტანეთ მისი ინფორმაცია შემდეგი ფორმატით ( key: value )
// Bonus) გააკეთეთ იგივე თუმცა გამოიტანეთ ინფორმაცია თუ value-ს 5-ზე ნაკლები ასო აქვს

const obj1 = {
    saxeli: "sali",
    gvari: "giorgadze",
    asaki: 27,
    dabadebisWeli: 1965
}

for (let i in obj1) {
    console.log(`${i}: ${obj1[i]}`)
}


const obj2 = {
    saxeli: "sali",
    gvari: "giorgadze",
    asaki: 27,
    dabadebisWeli: 1965
}

for (let i in obj2) {
    if (obj2[i].length < 5) {
        console.log(`${i}: ${obj2[i]}`)
    }
}

