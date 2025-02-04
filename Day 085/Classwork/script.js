document.querySelector('.div1').addEventListener('click', function (e) {
    console.log('div1');
});

document.querySelector('.div2').addEventListener('click', function (e) {
    console.log('div2');
    e.stopPropagation();
});

document.querySelector('.div3').addEventListener('click', function (e) {
    console.log('div3');
});

document.querySelector('.div4').addEventListener('click', function (e) {
    console.log('div4');
    e.stopPropagation();
});
document.querySelector('.div5').addEventListener('click', function (e) {
    console.log('div5');
});


const divs = document.querySelectorAll('.div6, .div7, .div8, .div9, .div10');

for (let i = 0; i < divs.length; i++) {
    divs[i].addEventListener('click', function (e) {
        console.log(divs[i].className);
        if (divs[i].className === 'div6' || divs[i].className === 'div8' || divs[i].className === 'div10') {
            e.stopPropagation();
        }
    });
}