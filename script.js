let number1 = document.querySelector('#one');
let number2 = document.querySelector('#two');
let number3 = document.querySelector('#three');
let number4 = document.querySelector('#four');
let number5 = document.querySelector('#five');
let number6 = document.querySelector('#six');
let number7 = document.querySelector('#seven');
let number8 = document.querySelector('#eight');
let number9 = document.querySelector('#nine');
let number0 = document.querySelector('#zero');

let result = document.querySelector('#result');
let add = document.querySelector('#plus');
let minus = document.querySelector('#minus');
let multiply = document.querySelector('#multiply');
let divide = document.querySelector('#divide');
let clear = document.querySelector('#clear');

let screen = document.querySelector('.screen');

let firstNumber = '';
let secondNumber = '';
let dzialanie = '';
let wynik = 0;

number1.addEventListener('click', (event) => {
    zbierzDane(1);
});

number2.addEventListener('click', (event) => {
    zbierzDane(2);
});

number3.addEventListener('click', (event) => {
    zbierzDane(3);

});

number4.addEventListener('click', (event) => {
    zbierzDane(4);

});

number5.addEventListener('click', (event) => {
    zbierzDane(5);

});

number6.addEventListener('click', (event) => {
    zbierzDane(6);

});

number7.addEventListener('click', (event) => {
    zbierzDane(7);

});

number8.addEventListener('click', (event) => {
    zbierzDane(8);

});

number9.addEventListener('click', (event) => {
    zbierzDane(9);

});

result.addEventListener('click', (event) => {
    zbierzDane('=');

});

divide.addEventListener('click', (event) => {
    zbierzDane('/');

});

add.addEventListener('click', (event) => {
    zbierzDane('+');

});

minus.addEventListener('click', (event) => {
    zbierzDane('-');

});

clear.addEventListener('click', (event) => {
    screen.textContent = '';
    firstNumber = '';
    secondNumber = '';
    dzialanie = '';
});


multiply.addEventListener('click', (event) => {
    zbierzDane('*');

});

zero.addEventListener('click', (event) => {
    zbierzDane(0);

});

function zbierzDane(input) {
    screen.textContent += input;
    if (typeof(input) == 'number' && dzialanie == '') {
        firstNumber = firstNumber + input;
    } else if (typeof(input) == 'number' && dzialanie !== '') {
        secondNumber = secondNumber + input;
    } else if (typeof(input) == 'string') {

        if (input == '=') {
            switch (dzialanie) {
                case '*':
                    wynik = firstNumber * secondNumber;
                    break;
                case '-':
                    wynik = firstNumber - secondNumber;
                    break;
                case '/':
                    wynik = firstNumber / secondNumber;
                    break;
                case '+':
                    wynik = +firstNumber + +secondNumber;
                    break;
                default:
                    screen.textContent = 'Error';
            }
            screen.textContent = wynik;
        } else { dzialanie = input }
    }

    console.log('pierwsza: ' + firstNumber);
    console.log('druga: ' + secondNumber);
    console.log('dzialanie: ' + dzialanie);
}