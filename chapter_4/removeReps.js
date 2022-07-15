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

console.log(removeReps([1, 1, 2, 4, 5, 6, 6, 8, 9, 11])); // [1,2,4,5,6,8,9,11]
console.log(removeReps([1,1,1,1])); // [1]
console.log(removeReps([1,2,3,4,5,6])); // [1,2,3,4,5,6]
console.log(removeReps([])); // []

