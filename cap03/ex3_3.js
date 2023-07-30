const prompt = require('prompt-sync')()
const salario = Number(prompt('Salário: '))
const tempo = Number(prompt('Tempo (anos): '))
const quadrienio = Math.floor(tempo / 4)
const acrescimo = salario * quadrienio / 100

console.log(`Quadriênios: ${quadrienio}`)
console.log(`Salário Final R$: ${(salario + acrescimo).toFixed(2)}`)


/**
 * Elaborar um programa para uma empresa que leia o salário e o tempo que um funcionário trabalha na empresa. Sabendo que a cada 4 anos (quadriênio) o funcionário recebe um aumento de 1% no salário, calcule e informe o número de quadriênios a que o funcionário tem direito e o salário final.
 */