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