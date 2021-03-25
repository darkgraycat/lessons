window.onload = e => {

	const taskNames = `Age Detector; Keyboard Symbol; Same Numbers; Leap Year; Palindrome; Currency; Discount; Rect and Circle Problem; Quiz; Next Date;
		Ariphmetic Progression Summ; Same Divider; All Dividers; Digits Count; Number Filter; Calculator; Shifting Digits; Next Day; Multiply Table; Game;
		-1 0 1; Factorial; Concat Numbers; Rectangle Calc; Perfect Number; Perfect Numbers; Time Convert; Return Seconds; Return Time String; Date Delta`.split(';')
	const tasks = []

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

	// 

	tasks[10] = () => {
		const numberStart = +prompt('Enter start number')
		const numberEnd = +prompt('Enter end number')
		alert(numberStart + numberEnd * (numberEnd - numberStart) / 2)
	}

	tasks[11] = () => {

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
	const isPerfect = n => {
		const dividers = getDividers(n)
		return dividers.reduce((a, b) => a + b) == n
	}

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

	const buttons = document.getElementsByTagName('button')
	for (let i = 0; i < buttons.length; i++) {
		buttons[i].onclick = tasks[i]
		buttons[i].innerHTML = taskNames[i]
	}
}