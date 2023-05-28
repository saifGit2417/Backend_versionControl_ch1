// const { differnece } = require("./Diff")
// const { sum } = require("./Sum")
import { sum } from "./Sum.js"

console.log("i am saif")

console.log(1 + 2 + 3)
console.log(1 + 2 + 3 + 5)


// console.log(differnece(1, 2))
console.log(sum(10, 20))


// const fsModule=require('fs')     ///old method to reuqire modules

import fsModule from 'node:fs'     ///using es6 method for import export

const readFile = fsModule.readFileSync('./Demo.txt','utf-8')
console.log(readFile)