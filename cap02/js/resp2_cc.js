const form = document.getElementById('form')
const resp1 = document.getElementById('output1')
const resp2 = document.getElementById('output2')

form.addEventListener('submit', (e) => {
   const product = form.inProduct.value
   const price = Number(form.inPrice.value)
   // alert('TEST')
   const discount = (price * 2) + (price / 2)

   resp1.innerText = `${product} - Promoção: Leve 3 por R$: ${discount.toFixed(2)}`
   resp2.innerText = `O 3º Produto custa apenas R$: ${(price / 2).toFixed(2)}`
   
   e.preventDefault()
})