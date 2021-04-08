window.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('.score-circle').forEach(elem => {
    const canvas = document.createElement('canvas')
    canvas.height = 400
    canvas.width = 400
    canvas.style.width = '100%'
    canvas.style.height = '100%'
    canvas.style.position = 'absolute'
    canvas.style.backgroundColor = 'red'
    elem.style.position = 'relative'
    elem.style.background = canvas
    elem.appendChild(canvas)
    elem.addEventListener('change', e => {
      console.log('object', e);
    })

  })
})