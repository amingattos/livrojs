const form = document.getElementById('form')
const resp1 = document.getElementById('showOut1')
const resp2 = document.getElementById('showOut2')

form.addEventListener('submit', (e) => {
   const nameMedicate = document.getElementById('inMedicate')
   const priceMedicate = document.getElementById('inPrice')

   const priceDiscount = Math.floor(parseFloat(priceMedicate.value * 2))

   resp1.innerText = `Promoção de ${nameMedicate.value}`
   resp2.innerText = `Leve 2 por apenas R$: ${priceDiscount.toFixed(2)}`

   e.preventDefault()
})