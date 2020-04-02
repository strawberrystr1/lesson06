'use strict';

const isNumber = function (n) {
    return !isNaN(parseFloat(n)) && isFinite (n);
};

const gameBoy = function () {
    let set;
    let trying = 3;
    let number = Math.floor(Math.random() * 102); //загаданное число
    console.log('number: ', number);

    function count () {
        trying--;
        if (trying === 0) {
           set = confirm('Попытки закончились, хотите сыграть еще?');
        }
        if (set) {
            gameBoy();
        } else {
            return;
        }
        console.log(set);
        return set;
    }   
   
    function attempt () {
        let ask = prompt('Угадай число от 1 до 100'); // число пользователя
  
        if (ask === null) {
            return alert(`Игра закончена!`);
        }

        if(!isNumber(ask)) {
            confirm('Введи число!');
            attempt();
        } 

        if (ask > number) {
            count();
            if (confirm(`Загаданное число меньше, осталось попыток ${trying}!`) && set !== false) {
            attempt();
            } else {return alert(`Игра закончена!`);}
        } else if (ask < number) {
            count();
            if (confirm(`Загаданное число больше, осталось попыток ${trying}`) && set !== false) {
            attempt();
            } else {return alert(`Игра закончена!`);}
        } else if (+ask === number) {
           if (confirm('Вы угадали число! Хотели бы сыграть еще?')) {
               gameBoy();
           } else {return alert(`Игра закончена!`);}
        }
 
    }
    
   attempt();

};

gameBoy();

