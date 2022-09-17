import { expect } from 'chai'
import * as app from '../src/app.js'

describe('Helper Function - Check Integers', () => {
    it('should only accept any length of provided integers', () => {
        expect(app.checkIntegers(1, 2, 3, 4, 5)).to.be.true
    })

    it('should throw an error if string is detected in any of the arguments', () => {
        expect(() => app.checkIntegers(1, 2, 3, 'four')).to.throw(TypeError)
    })

    it('should throw an error if number as string is detected in any of the arguments', () => {
        expect(() => app.checkIntegers(1, '2', 3, 4)).to.throw(TypeError)
    })

    it('should throw an error if float is detected in any of the arguments', () => {
        expect(() => app.checkIntegers(1, 2, 3, 4.4231, 5)).to.throw(TypeError)
    })

    it('should throw an error if array is detected in any of the arguments', () => {
        expect(() => app.checkIntegers(1, [1, 2, 3], 5)).to.throw(TypeError)
    })

    it('should throw an error if object is detected in any of the arguments', () => {
        expect(() => app.checkIntegers(1, { value: 2, }, 3, 4, 5)).to.throw(TypeError)
    })
})

describe('Test 1 - MULTIPLES of 3 or 5', () => {
    it('should find the sum of all the multiples of 3 or 5 below 1000', () => {
        expect(app.multiples(1_000)).to.equal(233168)
    })

    it('should return error message due to wrong data type', () => {
        expect(() => app.multiples('one thousand')).to.throw(TypeError)
    })
})

describe('Test 2 - POWER DIGITAL SUM', () => {
    it('should find the sum of the digits of the number 2^1000', () => {
        expect(app.sumOfDigits(2, 1_000)).to.equal(1366)
    })

    it('should return error message if only one argument is provided', () => {
        expect(() => app.sumOfDigits(2 ** 1000)).to.throw(TypeError)
    })

    it('should return error message due to wrong data type', () => {
        expect(() => app.sumOfDigits('two', 'one thousand')).to.throw(TypeError)
    })
})