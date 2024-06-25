import {it,expect, describe} from 'vitest'

import { clearNumbers, transformToNumber } from './numbers'

describe('transformToNumber',()=>{
    it("should transform a string number to number of type number",()=>{
        const input = "1"
        const result = transformToNumber(input)
        expect(result).toBeTypeOf('number')
    })
    
    it("should yield NaN for non-transformable values",()=>{
        const input = "mayuri"
        const input2= {}
        const result = transformToNumber(input)
        const result2 = transformToNumber(input2)
        expect(result).toBeNaN()
        expect(result2).toBeNaN()
    })
})

describe('clearNumbers',()=>{
    it("should return an array of number values if an array of string number values is provided",()=>{
        const numberValues = ['1','2']
        const cleanNumbers = clearNumbers(numberValues)
        expect(cleanNumbers[0]).toBeTypeOf('number')
    })
    it("should return an array of number values if an array with at least one empty string is provided",()=>{
        const numberValues = ['','2']
        const cleanFn = ()=>clearNumbers(numberValues)
        expect(cleanFn).toThrow()
    })
})


