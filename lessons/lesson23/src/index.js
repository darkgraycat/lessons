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


	const buttons = document.getElementsByTagName('button')
	for (i in buttons) {
		buttons[i].innerHTML = taskNames[i]
		buttons[i].onclick = tasks[i]
	}

}