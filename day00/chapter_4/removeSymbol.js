// Функция на вход принимает две строки - сообщение (обычная строка с текстом) и символ который надо удалить из этого сообщения

function removeString(message, symbol) {
	let arr = message.split("");
	let index = arr.indexOf(symbol);

	while ( index != -1 ) {
		arr.splice(index, 1);
		index = arr.indexOf(symbol);
	}

	return arr.join('');
}
