const prompt = require('prompt-sync')()
const peso = Number(prompt('Peso (kg): '))
const consumoDiario = Number(prompt('Consumo diário (g): '))
const pesoGrama = peso * 1000
const duracao = Math.floor(pesoGrama / consumoDiario)
const sobra = pesoGrama % consumoDiario

console.log(`Duração: ${duracao} dias`)
console.log(`Sobra: ${sobra}g`)