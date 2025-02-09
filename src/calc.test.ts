import { expect, test } from 'vitest'
import { Calc } from './calc'

const cases: [string, string[]][] = [
	['1', ['', '1', '']],
	['.', ['', '0.', '']],
	['1.', ['', '1.', '']],
	['1+', ['', '1', '+']],
	['10+40', ['10', '40', '+']],
	['10+40+', ['', '50', '+']],
	['10+40+20', ['50', '20', '+']],
	['10+40+20=', ['', '70', '']],
	['10.5+40.5+20=', ['', '71', '']],
] as const

cases.forEach(([input, [previous, current, operator]]) => {
	test(`${input} => p: ${previous}, c: ${current}, o: ${operator}`, () => {
		const calc = new Calc()

		calc.input(input)

		expect(calc.state).toEqual({ previous, current, operator })
	})
})
