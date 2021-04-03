class PrintMachine {
	fontSize = `14px`
	fontColor = 'black'
	fontFamily = 'monospace'

	constructor(size, color, family) {
		this.fontSize = size
		this.fontColor = color
		this.fontFamily = family
	}

	print(message, parent) {
		const elem = document.createElement('div')
		elem.style.fontSize = this.fontSize
		elem.style.color = this.fontColor
		elem.style.fontFamily = this.fontFamily
		elem.innerHTML = message

		parent.appendChild(elem)
	}

}

class NewsBlock {
	constructor(header, text, tagsArray, date) {
		this.headerPrinter = new PrintMachine('32px', '#222', 'Verdana')
		this.textPrinter = new PrintMachine('14px', '#444', 'Arial')
		this.tagPrinter = new PrintMachine('12px', '#844', 'monospace')
		this.datePrinter = new PrintMachine('16px', '#488', 'monospace')
		this.header = header
		this.text = text
		this.tagsArray = tagsArray
		this.date = date
	}

	print(parent) {
		const elem = document.createElement('div')
		this.headerPrinter.print(this.header, elem)
		this.textPrinter.print(this.text, elem)
		for (let tag of this.tagsArray) {
			this.tagPrinter.print(`[${tag}]`, elem)
		}
		this.datePrinter.print(this.date, elem)

		parent.appendChild(elem)
	}

	static askNews() {
		return new NewsBlock(
			prompt('Header:'),
			prompt('Text:'),
			prompt('Tags:').split(' '),
			new Date(prompt('Date:'))
		)
	}
}

class NewsFeed {
	constructor(newsBlocks) {
		this.newsBlocks = newsBlocks
	}

	print(parent) {
		const elem = document.createElement('div')
		for (let news of this.newsBlocks) {
			news.print(elem)
		}
		parent.appendChild(elem)
	}

	get length() {
		return this.newsBlocks.length
	}

	addNews(newsBlock) {
		this.newsBlocks.push(newsBlock)
	}

	removeNews() {
		this.newsBlocks.pop()
		// not implemented yet
	}

	fromTag(tag) {
		// not implemented yet
	}
}


const printText = () => {
	new PrintMachine('32px', 'red', 'Verdana').print(prompt('Enter text:\n'), document.body)
}

const printNews = () => {
	new NewsBlock('SomeHeader', 'Some texxxt', 'tag1 tag2 tag3'.split(' '), new Date()).print(document.body)
}

const printNewsFeed = () => {
	new NewsFeed([
		new NewsBlock('Header 1', 'Text Text Text Text Text Text Text ', ['tag1', 'tag2'], new Date()),
		new NewsBlock('Header 2', 'Text Text Text Text Text Text Text ', ['tag1', 'tag2'], new Date()),
		new NewsBlock('Header 3', 'Text Text Text Text Text Text Text ', ['tag1', 'tag2'], new Date())
	]).print(document.body)
}