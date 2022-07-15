// //Напишите функцию counter, которая при каждом вызове будет возвращать числа на 3 больше, чем в прошлый. Нельзя использовать переменные, объявленные через var!

function getCount() {
	let count = -3;
	return () => count +=3;
}

let counter = getCount();

alert(counter()); // Функция вернет 0
alert(counter()); // Функция вернет 3
alert(counter()); // Функция вернет 6
alert(counter()); // Функция вернет 9