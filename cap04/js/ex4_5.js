const frm = document.querySelector('form')
const h3 = document.querySelector('h3')

frm.addEventListener('submit', (e) => {
   e.preventDefault()

   const numero = Number(frm.inNumber.value)
   const raiz = Math.sqrt(numero)

   if(Number.isInteger(raiz)) {
      h3.innerText = `Raiz: ${raiz}`
   } else {
      h3.innerText = `Não há raiz exata para: ${numero}`
   }
})