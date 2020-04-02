'use strict';

const isNumber = function (n) {
    return !isNaN(parseFloat(n)) && isFinite (n);
};

const gameBoy = function () {

    let number = Math.floor(Math.random() * 102); //загаданное число
    console.log('number: ', number);
    function attempt () {
        let ask = prompt('Угадай число от 1 до 100'); // число пользователя

        if (ask === null) {
            return;
        }

        if(!isNumber(ask)) {
            confirm('Введи число!');
            attempt();
        }
        
        if (ask === number) {
            alert ('Вы угадали число!');
        } else if (ask > number) {
            if (confirm('Загаданное число меньше!')) {
            attempt();
            } else {return;}
        } else if (ask < number) {
            if (confirm('Загаданное число больше')) {
            attempt();
            } else {return;}
        }
    }
    
   attempt();

};

gameBoy();

