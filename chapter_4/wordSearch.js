//  В этой задаче нужно будет написать алгоритм поиска, который скажет, можно ли найти входное слово в головоломке поиска слов, которая тоже подается функции на вход.
// Данная задача имеет два уровня сложности :
// - Первый уровень включает в себя исключительно поиск по вертикали и по горизонтали
// - Второй уровень дополнительно включает в себя поиск по диагонали
// - Слова могут быть записаны слева направо и наоборот.


function searchSubString(puzzle, word) {
	let reversedWord = word.split("").reverse().join('');;
	const vertical = [];

	
	for (let h = 0; h < puzzle[0].length; ++h) {
		vertical.push([]);
		for (let v = 0; v < puzzle.length; ++v)
			vertical[h].push(puzzle[v][h]);
	}
	
	for (let i in puzzle) {
		if (puzzle[i].join('').indexOf(word) != -1
		|| puzzle[i].join('').indexOf(reversedWord) != -1
		|| vertical[i].join('').indexOf(word) != -1
		|| vertical[i].join('').indexOf(reversedWord) != -1)
			return true;
	}

	return false;
}

const examplePuzzle = [
  ["b", "l", "g", "o", "l", "d", "s"],
  ["x", "k", "q", "w", "i", "j", "p"],
  ["a", "n", "w", "k", "k", "p", "n"],
  ["h", "e", "e", "e", "k", "i", "l"],
  ["q", "e", "k", "a", "y", "q", "a"],
  ["h", "u", "h", "a", "e", "a", "u"],
  ["k", "q", "j", "c", "c", "m", "r"],
];
