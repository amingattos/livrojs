const frm = document.querySelector('form')
const out1 = document.querySelector('#out-1')
const out2 = document.querySelector('#out-2')
const out3 = document.querySelector('#out-3')

frm.addEventListener('submit', (e) => {
   e.preventDefault()

   out1.innerText = ''
   out2.innerText = ''
   out3.innerText = ''

   const saque = Number(frm.inSaque.value)

   if(saque % 10 != 0) {
      alert('Valor inválido para notas disponíveis (R$ 10, 50, 100)')
      frm.inSaque.focus()
      return
   }

   const notasCem = Math.floor(saque / 100)
   let resto = saque % 100

   const notasCinquenta = Math.floor(resto / 50)
   resto = resto % 50

   const notasDez = Math.floor(resto / 10)

   if(notasCem > 0) {
      out1.innerText = notasCem
   }
   if(notasCinquenta > 0) {
      out2.innerText = notasCinquenta
   }
   if(notasDez > 0) {
      out3.innerText = notasDez
   }
})