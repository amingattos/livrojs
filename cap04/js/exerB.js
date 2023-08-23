const frm = document.querySelector('form')
const output = document.querySelector('h3')

frm.addEventListener('submit', (e) => {
   e.preventDefault()

   const velPermitida = Number(frm.inNrPermitida.value)
   const velCondutor = Number(frm.inNrCondutor.value)

   const velMaior = velPermitida + (velPermitida * 0.2) // Velocidade permitida vezes 20%

   // if(velCondutor <= velPermitida) {
   //    output.innerText = 'Sem Multa'
   // } else if(velCondutor > velPermitida && velCondutor < velMaior) {
   //    output.innerText = 'Multa Grave'

   // } else if (velCondutor >= velMaior) {
   //    output.innerText = 'Multa Gravíssima'
   // }

   velCondutor <= velPermitida ? output.innerText = 'Sem Multa':
   velCondutor > velPermitida && velCondutor < velMaior ? output.innerText = 'Multa Grave':
   velCondutor >= velMaior ? output.innerText = 'Multa Gravíssima': 0
})