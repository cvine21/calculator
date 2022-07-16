// Напишите функцию банкомат которая принимает на вход число и возвращает объект в формате  {номинал_купюры : количество_купюр}.
// Если банкомат не может выдать данную сумму, то выводится ошибка 'Incorrect value'.
// Купюры должны выдаться оптимальным образом (вместо 5 купюр номиналом 1000 выдается одна 5000).
// За раз банкомат может выдавать не более 20 купюр, если купюр для выдачи не хватает то выводится ошибка 'Limit exceeded'

function atm(sum) {
  	const banknots = [5000, 2000, 1000, 500, 200, 100, 50];
  	let cash = {};
	maxBils = 20;

	for (let i in banknots) {
		if (sum >= banknots[i]) {
			cash[banknots[i]] = Math.floor(sum / banknots[i]);
			sum -= cash[banknots[i]] * banknots[i];
			maxBils -= cash[banknots[i]];
		}
		if (maxBils < 0)
			return "Limit exceeded";
	}
	if (sum != 0)
		return "Incorrect value";
	return cash;
}
