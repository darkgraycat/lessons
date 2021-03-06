/*
	I decide to keep all simple lessons in one js file
	see https://darkgraycat.github.io/lessons/lessons/lesson23/index.html
*/


window.onload = e => {

	const taskNames = `Age Detector; Keyboard Symbol; Same Numbers; Leap Year; Palindrome; Currency; Discount; Rect and Circle Problem; Quiz; Next Date;
		Ariphmetic Progression Summ; Same Divider; All Dividers; Digits Count; Number Filter; Calculator; Shifting Digits; Next Day; Multiply Table; Game;
		-1 0 1; Factorial; Concat Numbers; Rectangle Calc; Perfect Number; Perfect Numbers;	 Time Convert; Return Seconds; Return Time String; Date Delta;
		Create Rectangle; Rectangle Width; Rectangle Height; Rectangle Square; Rectangle Perimeter; Add Width; Add Height; Add Size; Translate Rectangle; Is Inside Rectangle;
		The Auto Object; The FractionalNumber Object; The Time Object`.split(';')
	const tasks = []


	/*
		LESSON 23
	*/

	tasks[0] = () => {
		const age = +prompt('Print your age')
		let msg = ''
		if (age <= 2) {
			msg = 'Baby'
		} else if (3 <= age && age < 12) {
			msg = 'Child'
		} else if (12 <= age && age <= 18) {
			msg = 'Teen'
		} else if (18 <= age && age < 60) {
			msg = 'Adult'
		} else if (60 <= age) {
			msg = 'Old'
		}
		alert(msg)
	}

	tasks[1] = () => {
		const input = +prompt('Enter number from 0 to 9')
		const symbols = ')!@#$%^&*('.split('')
		alert(`The key is ${symbols[input]}`)
	}

	tasks[2] = () => {
		const number = prompt('Enter 3-digit number').split('')
		if (number[0] == number[1] || number[1] == number[2] || number[2] == number[0]) {
			alert('Same numbers')
		} else
			alert('No same numbers')
	}

	tasks[3] = () => {
		const year = +prompt('Enter year')
		if (year % 400 || year % 4 || year % 100 != 0) {
			alert('No leap year')
		} else
			alert('Leap year')
	}

	tasks[4] = () => {
		const number = prompt('Enter number')
		const inverted = number.split('').reverse().join('')
		if (number === inverted) {
			alert('Palindrome')
		} else
			alert('No palindrome')
	}

	tasks[5] = () => {
		const currencies = {
			'EUR': 30.00,
			'USD': 27.00,
			'UAN': 14.00,
			'AZN': 1.5
		}
		const input = prompt('Enter value and currency in format VALUE (EUR USD UAN AZN)').split(' ')
		const value = +input[0]
		const currency = input[1]
		alert(currencies[currency] * value)
	}

	tasks[6] = () => {
		const value = +prompt('Enter price')
		if (200 <= value && value <= 300) {
			alert(value * 0.97)
		} else if (300 < value && value <= 500) {
			alert(value * 0.95)
		} else if (500 < value) {
			alert(value * 0.93)
		} else {
			alert('No bullshit maaan')
		}
	}

	tasks[7] = () => {
		const input = prompt('Enter circle lenght and square perimeter in format XX YY').split(' ')
		const circleLength = input[0] / Math.PI
		const squareWidth = input[1] / 4
		if (squareWidth >= circleLength) {
			alert('yes')
		} else
			alert('no')
	}

	tasks[8] = () => {
		const firstQuestion = +prompt('2+2 = ?')
		const secondQuestion = +prompt('2*2 = ?')
		const thirdQuestion = +prompt('2/2 = ?')
		let result = 0
		result += (firstQuestion == 4) * 2
			+ (secondQuestion == 4) * 2
			+ (thirdQuestion == 1) * 2
		alert(result)
	}

	tasks[9] = () => {
		const date = new Date(Date.parse(prompt('Enter date in format MM.DD.YYYY')))
		const newDate = new Date()
		newDate.setDate(date.getDate() + 1)
		alert(newDate)
	}

	/*
		LESSON 24
	*/

	tasks[10] = () => {
		const numberStart = +prompt('Enter start number')
		const numberEnd = +prompt('Enter end number')
		alert(numberStart + numberEnd * (numberEnd - numberStart) / 2)
	}

	tasks[11] = () => {
		const numberA = +prompt('Enter first number')
		const numberB = +prompt('Enter second number')
		const getSameBiggestDivider = (a, b) => (b) ? getSameBiggestDivider(b, a % b) : Math.abs(a)
		alert(getSameBiggestDivider(numberA, numberB))
	}

	tasks[12] = () => {
		const number = +prompt('Enter number')
		alert(getDividers(number))
	}

	tasks[13] = () => {
		let input = prompt('Enter number')
		alert(input.length)
	}

	tasks[14] = () => {
		let positive = 0
		let negative = 0
		let even = 0
		let odd = 0
		let zero = 0
		for (let i = 0; i < 10; i++) {
			const input = +prompt(`${i + 1} Type number`)
			if (input > 0) {
				positive++
			} else if (input < 0) {
				negative--
			} else zero++
			if (input % 2) {
				even++
			} else odd++
		}
		alert(`Positive:${positive}\nNegative:${negative}\nEven:${even}\nOdd:${odd}\nZero:${zero}`)
	}

	tasks[15] = () => {
		while (true) {
			const num_a = +prompt('Enter first number')
			const num_b = +prompt('Enter second number')
			const sign = prompt('Enter operator')
			alert(eval(num_a + sign + num_b))
			if (!confirm('Another calculation?')) return
		}
	}

	tasks[16] = () => {
		const number = prompt('Enter number')
		const digit = +prompt('Enter digit')
		const result = number.substring(digit) + number.substring(0, digit)
		alert(result)
	}

	tasks[17] = () => {
		const days = 'Monday Tuesday Wednesday Thursday Friday Saturday Sunday'.split(' ')
		let i = 0
		while (true) {
			i = i % days.length
			if (!confirm(days[i++])) return
		}
	}

	tasks[18] = () => {
		let result = ''
		for (let number = 2; number <= 9; number++) {
			result += number + ':: '
			for (let mult = 1; mult <= 10; mult++) {
				result += number * mult + '   '
			}
			result += '\n'
		}
		alert(result)
	}

	tasks[19] = () => {
		let from = 0
		let to = 100
		let number = to

		alert(`Mind a number from ${from} - ${to}`)

		while (true) {
			number = Math.floor((from + to) / 2)
			if (confirm(`Is equal = to ${number}`)) {
				alert('Well Done')
				return
			}
			if (confirm(`Is less < than ${number}`)) {
				to = number - 1
				continue
			}
			if (confirm(`Is greater > than ${number}`)) {
				from = number + 1
				continue
			}
		}
	}

	/*
		LESSON 25
	*/

	// misc functions
	const askNumbers = message => prompt('Enter comma-separated data: ' + message).split(',').map((value) => parseFloat(value))
	const showResult = message => alert('Result is: ' + message)
	const printResult = message => document.querySelector('#result').innerHTML = message

	const getDividers = n => {
		result = [1]
		for (let i = 2; i < n; i++) {
			if (n % i == 0) result.push(i)
		}
		return result
	}

	const isPerfect = n => getDividers(n).reduce((a, b) => a + b) == n

	// for lulz
	// const isPerfect = n => (n == 6) || (n == 28) || (n == 496) || (n == 8128)

	const convertToSeconds = (h, m, s) => h * 3600 + m * 60 + s
	const convertSeconds = s => {
		let hours = Math.floor(s / 3600 % 24)
		let minutes = Math.floor(s / 60 % 60)
		let seconds = s % 60
		if (hours < 10) hours = `0${hours}`
		if (minutes < 10) minutes = `0${minutes}`
		if (seconds < 10) seconds = `0${seconds}`
		return `${hours}:${minutes}:${seconds}`
	}

	tasks[20] = () => {
		const sign = (a, b) => ((a < b) ? -1 : ((a == b) ? 0 : 1))
		showResult(sign(...askNumbers('two numbers')))
	}

	tasks[21] = () => {
		const factorial = n => (n != 1) ? n * factorial(n - 1) : 1
		showResult(factorial(...askNumbers('one number')))
	}

	tasks[22] = () => {
		const concat = (a, b, c) => a * 100 + b * 10 + c
		showResult(concat(...askNumbers('three numbers')))
	}

	tasks[23] = () => {
		const rectSquare = (a, b) => a * (b || a)
		showResult(rectSquare(...askNumbers('one or two numbers')))
	}

	tasks[24] = () => {
		showResult(isPerfect(...askNumbers('one number')))
	}

	tasks[25] = () => {
		const getPerfectNumbers = (start, end) => {
			const result = []
			for (let i = start; i <= end; i++) {
				if (isPerfect(i)) result.push(i)
			}
			return result
		}
		showResult(getPerfectNumbers(...askNumbers('two numbers')))
	}

	tasks[26] = () => {
		const showTime = (h, m, s) => `${h}:${m}:${s || '00'}`
		showResult(showTime(...askNumbers('two or three numbers')))
	}

	tasks[27] = () => {
		showResult(convertToSeconds(...askNumbers('three numbers')))
	}

	tasks[28] = () => {
		showResult(convertSeconds(...askNumbers('one number')))
	}

	tasks[29] = () => {
		const getDeltaTime = (ha, ma, sa, hb, mb, sb) => {
			let secondsA = convertToSeconds(ha, ma, sa)
			let secondsB = convertToSeconds(hb, mb, sb)
			if (secondsA > secondsB) {
				secondsA = secondsA ^ secondsB
				secondsB = secondsA ^ secondsB
				secondsA = secondsA ^ secondsB
			}
			return convertSeconds(secondsB - secondsA)
		}
		showResult(getDeltaTime(...askNumbers('six! numbers')))
	}

	/*
		LESSON 26
	*/
	// Objects
	const Rectangle = {
		x1: 0, y1: 0,
		x2: 0, y2: 0,

		create(x1, y1, x2, y2) {
			return Object.assign({}, this).modify(x1, y1, x2, y2)
		},

		modify(x1, y1, x2, y2) {
			this.x1 = x1
			this.y1 = y1
			this.x2 = x2
			this.y2 = y2
			return this
		},

		toString() {
			return `Points: ${this.x1}:${this.y1}, ${this.x2}:${this.y1}\nWidth, height: ${this.getWidth()}, ${this.getHeight()}`
		},

		getWidth() {
			return Math.abs(this.x2 - this.x1)
		},

		getHeight() {
			return Math.abs(this.y2 - this.y1)
		},

		getSquare() {
			return this.getWidth() * this.getHeight()
		},

		getPerimeter() {
			return (this.getWidth() + this.getHeight()) * 2
		},

		addWidth(n) {
			this.x2 += n
		},

		addHeight(n) {
			this.y2 += n
		},

		addSize(w, h) {
			this.addWidth(w)
			this.addHeight(h)
		},

		transtale(x, y) {
			x = x || 0
			y = y || 0
			this.x1 += x
			this.x2 += x
			this.y1 += y
			this.y2 += y
		},

		isInside(x, y) {
			return (this.x1 <= x && x <= this.x2) && (this.y1 <= y && y <= this.y2)
			// return (this.x1 < x && this.x2 > x) && (this.y1 < y && this.y2 > y)
		}
	}

	let rect = Rectangle.create(0, 10, 20, 40)

	tasks[30] = () => {
		rect = Rectangle.create(...askNumbers('four numbers'))
		alert(`Your rect is:\n${rect.toString()}`)
	}

	tasks[31] = () => {
		alert(`Width: ${rect.getWidth()}`)
	}

	tasks[32] = () => {
		alert(`Height: ${rect.getHeight()}`)
	}

	tasks[33] = () => {
		alert(`Square: ${rect.getSquare()}`)
	}

	tasks[34] = () => {
		alert(`Perimeter: ${rect.getPerimeter()}`)
	}

	tasks[35] = () => {
		rect.addWidth(+prompt('New width'))
		alert(rect.toString())
	}

	tasks[36] = () => {
		rect.addHeight(+prompt('New height'))
		alert(rect.toString())
	}

	tasks[37] = () => {
		rect.addSize(...askNumbers('Enter width and height for rect'))
		alert(rect.toString())
	}

	tasks[38] = () => {
		rect.transtale(...askNumbers('Enter X and Y to translate'))
		alert(rect.toString())
	}

	tasks[39] = () => {
		alert(rect.isInside(...askNumbers('Enter dot coordinates')))
	}

	/*
		LESSON 26-ba tasks
	*/

	tasks[40] = () => {

		class Auto {
			constructor(vendor, model, year, speed) {
				this.vendor = vendor
				this.model = model
				this.year = year
				this.speed = speed
			}

			toString() {
				return `${this.year} ${this.model} ${this.vendor} with ${this.speed}mph average speed`
			}

			getRequiredTime(distance) {
				const time = distance / this.speed
				const rest = Math.floor(time / 4)
				return time + rest
			}
		}

		const calcTime = auto => ''
			+ `100miles: ${auto.getRequiredTime(100).toFixed(2)} hours\n`
			+ `200miles: ${auto.getRequiredTime(200).toFixed(2)} hours\n`
			+ `300miles: ${auto.getRequiredTime(300).toFixed(2)} hours\n`
			+ `400miles: ${auto.getRequiredTime(400).toFixed(2)} hours\n`

		const auto1 = new Auto('Toyota', 'Supra', 2004, 200)
		const auto2 = new Auto('Nissan', '350Z', 2008, 300)
		const auto3 = new Auto(...'VAZ 2101'.split(' '), 1980, 50)	//helpfull with tonn of string arguments=)

		alert(`We have ${auto1.toString()} \nand test it:\n ${calcTime(auto1)}`)
		alert(`We have ${auto2.toString()} \nand test it:\n ${calcTime(auto2)}`)
		alert(`We have ${auto3.toString()} \nand test it:\n ${calcTime(auto3)}`)
	}

	tasks[41] = () => {
		class FractionalNumber {
			constructor(numerator, denominator) {
				this.numerator = numerator
				this.denominator = denominator
			}

			toString() { return this.numerator + '/' + this.denominator }
			valueOf() { return this.numerator / this.denominator }

			add(fracNumber) {

			}

			setDenominator(denom) {

			}

		}

		const num1 = new FractionalNumber(2, 3)
		const num2 = new FractionalNumber(2, 6)

		const result = num1.add(num2)
		alert(result)
	}




	const buttons = document.getElementsByTagName('button')
	for (let i = 0; i < buttons.length; i++) {
		buttons[i].onclick = tasks[i]
		buttons[i].innerHTML = taskNames[i]
	}
}