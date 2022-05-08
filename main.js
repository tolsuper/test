"use strict";

let money = +prompt('Ваш бюджет на месяц?', '100');
let time = +prompt('Введите дату в формате YYYY-MM-DD', '1991-05-16');
console.log(typeof time);
let expenses = {
};
expenses[prompt("Введите обязательную статью расходов в этом месяце")] = +prompt('Во сколько обойдется?');
expenses[prompt("Введите обязательную статью расходов в этом месяце")] = +prompt('Во сколько обойдется?');

let appData = {
    бюджет: money,
    timeData: time,
    expenses: expenses,
    optionalExpenses: {},
    income: [],
    savings: false
};

alert('Ваш бюджет на 1 день равен '+money / 30+' тугрикам');
console.log(appData);