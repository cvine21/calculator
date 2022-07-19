const numberButtons = document.querySelectorAll('.number');
const operationButtons = document.querySelectorAll('.operation');
const equalsButton = document.querySelector('.equals');
const clearButton = document.querySelector('.clear-button');
const currentOperandTextElement = document.querySelector('.current-operand');


class Calculator {
	constructor(currentOperandTextElement) {
		this.currentOperandTextElement = currentOperandTextElement;
		this.clear();
	}

	clear() {
		this.currentOperand = '';
		this.previousOperand = '';
		this.operation = undefined;
	}

	appendNumber(number) {
		if (number === '.' && this.currentOperand.includes('.')) return ;
		if (this.currentOperand.length == 13) return ;
		this.currentOperand = this.currentOperand.toString() + number.toString();
	} 

	chooseOperation(operation) {
		if (this.currentOperand === '') return ;
		if (this.previousOperand !== '') {
			this.compute();
		}
		this.operation = operation;
		this.previousOperand = this.currentOperand;
		this.currentOperand = '';
	}

	compute() {
		let	computation;
		const prev = parseFloat(this.previousOperand);
		const current = parseFloat(this.currentOperand);

		if (isNaN(prev) || isNaN(current)) return ;
		switch (this.operation) {
			case '+':
				computation = prev + current;
				break ;
			case '-':
				computation = prev - current;
				break ;
			case '*':
				computation = prev * current;
				break ;
			case '/':
				computation = prev / current;
				break ;
			default:
				return ;
		}
		this.currentOperand = computation;
		this.operation = undefined;
		this.previousOperand = '';
	}

	getDisplayNumber(number) {
		let stringNumber = number.toString();
		let integerDigits = parseFloat(stringNumber.split('.')[0]);
		let decimalDigits = stringNumber.split('.')[1];
		let integerDisplay;

		if (isNaN(integerDigits)) {
			integerDisplay = '';
		} else {
			integerDisplay = integerDigits.toLocaleString('en', {
				maximumFractionDigits: 0 });
		}
		if (decimalDigits != null) {
			return `${integerDisplay}.${decimalDigits}`;
		} else  {
			return integerDisplay;
		}
	}
	
	updateDisplay() {
		this.currentOperandTextElement.innerText =
			this.getDisplayNumber(this.currentOperand);
	}
}

let calculator = new Calculator(currentOperandTextElement);

numberButtons.forEach(button => {
	button.addEventListener('click', () =>  {
		calculator.appendNumber(button.innerText);
		calculator.updateDisplay();
	})
});

operationButtons.forEach(button => {
	button.addEventListener('click', () =>  {
		calculator.chooseOperation (button.innerText);
		calculator.updateDisplay();
	})
});

equalsButton.addEventListener('click', button => {
	calculator.compute();
	calculator.updateDisplay();
});

clearButton.addEventListener('click', button => {
	calculator.clear();
	calculator.updateDisplay();
});