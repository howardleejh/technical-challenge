import { expect } from 'chai'
import * as app from '../src/app.js'

describe('Test 1 - MULTIPLES of 3 or 5', () => {
    it('should find the sum of all the multiples of 3 or 5 below 1000', () => {
        const answer = app.multiples(1_000)
        expect(answer).to.equal(233168)
    })
})

describe('Test 2 - POWER DIGITAL SUM', () => {
    it('should find the sum of the digits of the number 2^1000', () => {
        const answer = app.sumOfDigits(2 ** 1_000)
        expect(answer).to.equal(1366)
    })
})