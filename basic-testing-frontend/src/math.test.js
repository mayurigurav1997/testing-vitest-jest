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