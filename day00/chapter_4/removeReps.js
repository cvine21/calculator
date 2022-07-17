// Вам нужно написать функцию которая принимает в кач-ве аргумента массива чисел и удаляет все повторяющиеся значения

function removeReps(array) {
	let arr = [];

	for (let i in array) {
		let isRep = false;
		for (let j in arr) {
			if (array[i] == arr[j]) {
				isRep = true;
				break ;
			}
		}
		if (!isRep)
			arr.push(array[i]);
	}
	return arr;
}
