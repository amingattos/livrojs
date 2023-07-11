const form = document.getElementById('form')
const resp1 = document.getElementById('outputPrice')

form.addEventListener('submit', (e) => {
   const priceIn15Minutes = Number(form.inPrice.value)
   const minutesByClient = Number(form.inTimeClient.value)

   const price =   Math.ceil(minutesByClient / 15) *  priceIn15Minutes
   
   resp1.innerText = `Valor a pagar R$: ${price.toFixed(2)}`

   e.preventDefault()
})