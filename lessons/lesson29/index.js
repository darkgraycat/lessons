const printPlaylist = () => {
	const playList = [
		{
			author: "LED ZEPPELIN",
			song: "STAIRWAY TO HEAVEN"
		},
		{
			author: "QUEEN",
			song: "BOHEMIAN RHAPSODY"
		},
		{
			author: "LYNYRD SKYNYRD",
			song: "FREE BIRD"
		},
		{
			author: "DEEP PURPLE",
			song: "SMOKE ON THE WATER"
		},
		{
			author: "JIMI HENDRIX",
			song: "ALL ALONG THE WATCHTOWER"
		},
		{
			author: "AC/DC",
			song: "BACK IN BLACK"
		},
		{
			author: "QUEEN",
			song: "WE WILL ROCK YOU"
		},
		{
			author: "METALLICA",
			song: "ENTER SANDMAN"
		}
	];

	const listEl = document.createElement('ul')
	for (item of playList) {
		let li = document.createElement('li')
		li.innerHTML = `${item.author} - <b>${item.song}</b>`
		listEl.appendChild(li)
	}
	document.getElementById('songsContainer').appendChild(listEl)
}

const openModal = () => {
	document.querySelector('.modal').classList.remove('hide')
}

const closeModal = () => {
	document.querySelector('.modal').classList.add('hide')
}



const switchLight = (() => {
	let direction = 1

	return () => {
		const lights = document.querySelectorAll('.light')

		let index = 0
		let prev = 0

		let testIterator = 0

		while (true) {
			if (++testIterator > 100) return

			prev = index
			index = Math.abs((3 + index + direction) % 3)

			if (lights[prev].classList.contains('active')) {
				lights[prev].classList.remove('active')
				lights[index].classList.add('active')
				if (index == 0) {
					direction = 1
				} else if (index == 2) {
					direction = -1
				}
				return
			}
		}
	}
})()


const toggleText = () => {
	document.querySelector('.text').classList.toggle('hide')
}

const switchTab = n => {
	const tabs = document.querySelectorAll('.tabs__tab')
	const items = document.querySelectorAll('.content__item')
	tabs.forEach(tab => tab.classList.remove('active'))
	items.forEach(item => item.classList.remove('active'))
	tabs[n - 1].classList.add('active')
	items[n - 1].classList.add('active')
}

// 

const addProgress = () => {
	const bar = document.querySelector('.progress-bar__status')
	let progress = Number.parseInt(bar.style.width) || 0
	progress += 10
	if (progress >= 100) {
		progress = 100
		bar.innerHTML = 'Loaded!'
	}
	bar.style.width = `${progress}%`
}
