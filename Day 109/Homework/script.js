// 2) მანუალური object.assign(): შექმენით ფუნქცია რომელიც იღებს მინიმუმ 2-ს მაქსიმუმ უთვალავ არგუმენტს (ობიექტებს) და აბრუნებს ამ ობიექტების გაერთიანებას


function objs() {
    let obj = {};
    for (let i = 0; i < arguments.length; i++) {
        let argument = arguments[i];

        for (let key in argument) {
            obj[key] = argument[key];
            // console.log(obj[key])
        }
    }

    return obj;
}

const obj1 = { a: 1, b: 2 };
const obj2 = { c: 3, d: 4 };
const obj3 = { e: 5 };

console.log(objs(obj1, obj2, obj3))

