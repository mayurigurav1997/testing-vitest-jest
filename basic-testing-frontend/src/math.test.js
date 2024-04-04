import {test,it,expect} from "vitest"
import {add} from "./math"

it('shoul do sum of numbers in array',()=>{
     const result = add([1,2,3])
     expect(result).toBe(6)
     
})