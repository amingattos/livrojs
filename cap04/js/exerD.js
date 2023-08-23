const frm = document.querySelector('form')
const outLadoTriangulo = document.querySelector('.ladosForma')
const outTipoTriangulo = document.querySelector('.tipoForma')

frm.addEventListener('submit', (e) => {
   e.preventDefault()

   const ladoA = Number(frm.inLadoA.value)
   const ladoB = Number(frm.inLadoB.value)
   const ladoC = Number(frm.inLadoC.value)

   if (ladoA > ladoB + ladoC || ladoB > ladoA + ladoC || ladoC > ladoB + ladoA) {
      outLadoTriangulo.innerText = 'Os lados não podem formar um triângulo.'
   } else {
      let nomeTriangulo

      outLadoTriangulo.innerText = 'Os lados podem formar um triângulo.'

      if(ladoA == ladoB && ladoA == ladoC) {
         nomeTriangulo = 'Tipo: Equilátero'
      } else if(ladoA == ladoB || ladoA == ladoC) {
         nomeTriangulo = 'Tipo: Isósceles'
      } else if(ladoA != ladoB && ladoA != ladoC) {
         nomeTriangulo = 'Tipo: Escaleno'
      }

      outTipoTriangulo.innerText = nomeTriangulo
   }
})