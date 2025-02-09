const numbers = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9']
const operators = ['+', '-', '*', '/']

const doMath = (a: number, b: number, operator: string) => {
	switch (operator) {
		case '+':
			return a + b
		case '-':
			return a - b
		case '*':
			return a * b
		case '/':
			return a / b
	}
}

export class Calc {
	state: { current: string; operator: string; previous: string } = { current: '', operator: '', previous: '' }

	input(commandsString: string) {
		const commands = commandsString.split('')

		commands.forEach(command => {
			this.inputSingle(command)
		})
	}

	inputSingle(command: string) {
		if (operators.includes(command)) {
			if (this.state.operator) {
				this.state.current =
					doMath(Number(this.state.previous), Number(this.state.current), this.state.operator)?.toString() ?? ''
				this.state.previous = ''
			}
			this.state.operator = command
		}
		if (numbers.includes(command)) {
			if (this.state.operator && !this.state.previous) {
				this.state.previous = this.state.current
				this.state.current = ''
			}

			this.state.current += command
		}
		if (command === '=') {
			this.state.current =
				doMath(Number(this.state.previous), Number(this.state.current), this.state.operator)?.toString() ?? ''

			this.state.operator = ''
			this.state.previous = ''
		}
		if (command === '.') {
			if (!this.state.current.includes('.')) {
				if (this.state.current) {
					this.state.current += command
				} else {
					this.state.current = '0.'
				}
			}
		}
	}
}
