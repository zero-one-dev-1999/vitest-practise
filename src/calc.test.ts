import { describe, expect, test } from 'vitest'

describe('Faqat shu testlar ishlaydi', () => {
	test('Test 1', () => {
		expect(1 + 1).toBe(2)
	})

	test('Test 2', () => {
		expect(2 * 2).toBe(4)
	})
})

describe('Bu testlar ishlamaydi', () => {
	test('Test 3', () => {
		expect(3 + 3).toBe(6)
	})
})
