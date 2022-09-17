/** 
* @title Technical Test 
* @author Howard Lee
* @version 1.1.0
* @link: https://projecteuler.net/archives
*/


/*
Problem 1 - MULTIPLES of 3 or 5

If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. The sum of these multiples is 23.</ >
Find the sum of all the multiples of 3 or 5 below 1000. 
*/

export const multiples = (limit) => {

    // check and ensure value is integer
    checkIntegers(limit)
    let totalSum = 0

    for (let i = 0; i < limit; i++) {
        if (i % 3 === 0 || i % 5 === 0) {
            // check to see if all values are divisible by 3 or 5
            // console.log(i)
            totalSum += i
        }
    }
    return totalSum
}

/* 
Problem 16 - POWER DIGITAL SUM

2^15 = 32768 and the sum of its digits is 3 + 2 + 7 + 6 + 8 = 26.
What is the sum of the digits of the number 2^1000?

*/

export const sumOfDigits = (num, exponent) => {
    // check and ensure value is integer
    checkIntegers(num, exponent)

    const limit = num ** exponent
    let totalSum = 0
    const convertedToBigInt = BigInt(limit)
    const convertedToString = convertedToBigInt.toString()

    for (const number of convertedToString) {
        totalSum += parseInt(number)
    }

    return totalSum
}

/**
* @notice Helper function to check if all inputs are integers, if not an integer, return false
* @dev requires all values to be an integer, will throw error otherwise
* @params rest operator for undefined length of values
* @return results of iterating through all integers 
*/

export function checkIntegers(...values) {
    for (const value of values) {
        const result = Number.isInteger(value)
        if (result === false) {
            throw new TypeError('integer values only.')
        }
    }
    return true
}
