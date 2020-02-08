const target = 4000000
let startDate = new Date()
let sum = mySolution(target)
// let sum = solutionByPE(target)
let endDate = new Date()

// Performance: O(n)
/***************************My solution**************************/

function evenFibonacciSum(limit) {
	const memo = [1, 2]
	let sum = memo[1]
	let i = 2, n = 1

	while (sum <= limit) {
		memo[i] = memo[i - 1] + memo[i - 2]

		if(memo[i] > limit) {
			break
		}

		if(i === (3 * n + 1)) {
			sum += memo[i]
			n++
		}	

		i++
	}

	return sum
}

function mySolution(target = 0) {
	return evenFibonacciSum(target)
}

// Performance: Constant time O(n)
/***************************solution by Project Euler**************************/
function evenFibonacciSum_PE(limit) {
	let a = 1
	let b = 1
	let c = a + b
	let sum = 0

	while (sum <= limit) {
		sum += c
		a = b + c
		b = c + a
		c = a + b
	}

	return sum
}

function solutionByPE(target) {
	return evenFibonacciSum_PE(target)
}

/*****************************************************/

document.getElementById('answer').textContent = sum
const timeDiff = endDate.getTime() - startDate.getTime()
const timeText = timeDiff < 1 ? 'less then 1ms' : `${timeDiff}ms`
document.getElementById('time').textContent = timeText
