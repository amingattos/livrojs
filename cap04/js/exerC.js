const frm = document.querySelector('form')
const outTempo = document.querySelector('#outTime')
const outTroco = document.querySelector('#outTroco')

frm.addEventListener('submit', (e) => {
   e.preventDefault()

   const valor = Number(frm.inValor.value)

   if(valor < 1) {
      alert(`Valor insuficiente!
      Você precisa depositar R$ 1,00 para estacionar.`)
   }

   let troco

   if(valor >= 1 && valor < 1.75) {
      troco = valor - 1
      outTempo.innerText = 'Tempo de 30 minutos'
   } else if (valor >= 1.75 && valor < 3.00) {
      troco = valor - 1.75
      outTempo.innerText = 'Tempo de 60 minutos'
   } else if (valor >= 3.00) {
      troco = valor - 3
      outTempo.innerText = 'Tempo de 120 minutos'
   }

   outTroco.innerText = `Troco de R$: ${troco > 0 ? troco.toFixed(2) : '0.00'}`
})