import {test,it,expect} from "vitest"
import {add} from "./math"

it('should do sum of numbers in array',()=>{
    //arrange
    const numbers=[1,2,3]
   
    //act
     const result = add(numbers)

     //assert
     const expectedResult= numbers.reduce((prevVal,currVal)=> prevVal+ currVal,0)
     expect(result).toBe(expectedResult)

})

it("it should yield NaN if atleast one value is not a number", () => {
    const inputs=['mayu',5]
   const result = add(inputs)
   expect(result).toBeNaN()
})

it("it should yield a correct sum if array of numeric string values is provided", () => {
    const inputs=['9','8']
   const result = add(inputs)
   const expectedResult= inputs.reduce((prevVal,currVal)=> +prevVal + +currVal,0)
     expect(result).toBe(expectedResult)
})

it("should yield 0 if an empty array isprovided", () => {
    const numbers =[]
    const result = add(numbers)
    expect(result).toBe(0)
})

it("should throw an array if no value is passed into the function", () => {
   const resultFn = ()=>{
    add();
   }
   expect(resultFn).toThrow()
})

it("should throw an array if multiple arguments instead of an array", () => {
    const num1=1;
    const num2=9
    const resultFn = ()=>{
     add(num1,num2);
    }
    expect(resultFn).toThrow()
 })