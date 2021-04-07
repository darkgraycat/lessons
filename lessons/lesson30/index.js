window.onload = () => {

  // i wrote my jQuery
  const $ = query => document.querySelector(query)
  const $$ = query => document.querySelectorAll(query)




  document.addEventListener('keydown', e => {

    const { code, ctrlKey } = e
    const ctrl_e = code == 'KeyE' && ctrlKey
    const ctrl_s = code == 'KeyS' && ctrlKey

    if (ctrl_e || ctrl_s) {
      e.preventDefault()
      const div = document.querySelector('.text-editor div')
      const txt = document.querySelector('.text-editor textarea')
      if (ctrl_e) {
        div.classList.add('hidden')
        txt.classList.remove('hidden')
      } else if (ctrl_s) {
        div.classList.remove('hidden')
        txt.classList.add('hidden')
        div.innerHTML = txt.innerHTML
      }

    }

  })

  // document.querySelector('.name-table').addEventListener('click', ({ target }) => {
  //   if (target.tagName.toLowerCase() == 'th') {
  //     const trs = document.querySelectorAll('.name-table tr')
  //     const tds = document.querySelectorAll(`.name-table td:nth-child(${target.cellIndex + 1})`)
  //     const arr = []

  //     for (td of tds) { arr.push(td.innerHTML) }
  //     arr.sort()

  //     for (i in tds) {
  //       tds[i].innerHTML = arr[i]
  //     }

  //     window.arr = arr
  //     console.log(arr)
  //   }
  // })


  // document.querySelectorAll('.name-table th').forEach(th => th.addEventListener('click', e => {

  //   const rows = [...document.querySelectorAll('.name-table tr')].slice(1).sort((tra, trb) => {
  //     return tra.cells[th.cellIndex].innerHTML > trb.cells[th.cellIndex].innerHTML ? 1 : -1
  //   })
  //   document.querySelector('.name-table').append(...rows)
  //   console.log(rows)


  // }))

  $$('.name-table th').forEach(th => th.addEventListener('click', e => {
    const index = th.cellIndex
    const rows = [...$$('.name-table tr')].slice(1)
    const sortedRows = rows.sort((a, b) => a.cells[index].innerHTML > b.cells[index].innerHTML ? 1 : -1)
    $('.name-table').append(...sortedRows)
  }))







}