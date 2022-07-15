// Напишите функцию, которая будет принимать координаты числа в треугольника Паскаля и будет возвращать значение по координатам
// Если вы не знаете, что такое треугольник Паскаля, советую прочитать перед выполнение задания
// https://cdn.fishki.net/upload/post/201502/04/1414683/947eb978f710426fd0702fd119da506b.gif тут можно посмотреть наглядно принцип работы
// Считай, что начальные координаты 0,0
// Тут, возможно, поможет рекурсия

function factorial(n) {
	if (n == 0)
		return 1;
	return n * factorial(n - 1); 
}

function paskalsTriangle(x, y) {
	return factorial(y)/(factorial(x)*factorial(y - x));
}


alert(paskalsTriangle(2, 3)); // 3
alert(paskalsTriangle(4, 5)); // 5
alert(paskalsTriangle(1, 1)); // 1
