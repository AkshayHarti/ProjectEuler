const target = 32
let startDate = new Date()
let sum = mySolution(target)
// sum = solutionByPE(target)
let endDate = new Date()

// Performance: O(n)
/***************************My solution**************************/

function fibonacci() {
	if (memo[num]) return memo[num]
	if (num == 0) return 1
	if (num == 1) return 2

	return (memo[num] = fibonacci(num - 1, memo) + fibonacci(num - 2, memo))
}

function evenFibonacciSum(limit) {
	const memo = [1, 2]
	const sum = 1
	const i = 1

	while (sum <= limit) {
		memo[i + 1] = memo[i] + memo[i - 1]
	}
}

function mySolution(target = 0) {
	console.log(fibonacci(target))
}

// Performance: Constant time O(1)
/***************************solution by Project Euler**************************/
function divisibleBy(n, tempTarget = 0) {
	const target = tempTarget - 1
	const nthValue = parseInt(target / n)
	const sumOf_n_naturalNumbers = (n * (nthValue * (nthValue + 1))) / 2

	return sumOf_n_naturalNumbers
}

function solutionByPE(target) {
	return divisibleBy(3, target) + divisibleBy(5, target) - divisibleBy(3 * 5, target)
}

/*****************************************************/

document.getElementById('answer').textContent = sum
const timeDiff = endDate.getTime() - startDate.getTime()
const timeText = timeDiff < 1 ? 'less then 1ms' : `${timeDiff}ms`
document.getElementById('time').textContent = timeText
