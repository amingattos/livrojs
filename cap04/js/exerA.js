const frm = document.querySelector('form')
const output = document.querySelector('h3')

frm.addEventListener('submit', (e) => {
   e.preventDefault()

   const number = Number(frm.inNumero.value)

   // if(number % 2 === 0){
   //    output.innerText = `O número ${number} é: Par`
   // } else {
   //    output.innerText = `O número ${number} é: Impar`
   // }

   number % 2 === 0 ? output.innerText = `O número ${number} é: Par` : output.innerText = `O número ${number} é: Impar`
})