const frm = document.querySelector('form')
const h3 = document.querySelector('h3')

frm.addEventListener('submit', (e) => {
   e.preventDefault()

   const nome = frm.iText.value
   const masculino = frm.iRadioM.checked
   const feminino = frm.iRadioF.checked
   const altura = Number(frm.nTextA.value)

   let peso
   if(masculino) {
      peso = 22 * Math.pow(altura, 2)
   } else if(feminino){
      peso = 21 * Math.pow(altura, 2)
   }

   h3.innerText = `${nome}: Seu peso ideal é ${peso.toFixed(3)}kg`
})

frm.addEventListener('reset', () => {
   h3.innerText = ''
})
