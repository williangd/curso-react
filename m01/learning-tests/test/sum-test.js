'use strict'

const sum = require('./sum.js')

console.assert(
  typeof sum === 'function',
  'sum deve ser uma função'
)

console.assert(
  sum(1, 2) === 3,
  'Deveria retornar 3'
)

console.assert(
  sum(2, 3) === 5,
  'Deveria retornar 5'
)

console.assert(
  sum(4, -3) === 1,
  'Deveria retornar 1'
)

console.log('Todos os testes passaram!')
