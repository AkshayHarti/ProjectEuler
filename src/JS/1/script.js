function isMultipleOf5(num) {
	return num % 5 === 0
}

function mySolution(target = 0) {
    let sum = 0

    for (let i = 3; i < target; i += 3) {
	    if (!isMultipleOf5(i)) {
		    sum += i
	    }
    }

    for (let i = 5; i < target; i += 5) {
	    sum += i
    }

    return sum
}




let startDate = new Date()

// My solution
let sum = mySolution(1000)

// PE solution
//let sum = solutionByPE(1000)

let endDate = new Date()

document.getElementById('answer').textContent = sum
document.getElementById('time').textContent = (endDate.getTime() - startDate.getTime()) + 'ms'



/***************************solution by Project Euler**************************/
function divisibleBy(n, tempTarget = 0) {
    const target = tempTarget - 1
    const nthValue = parseInt(target / n)
    const sumOf_n_naturalNumbers = n * (nthValue * (nthValue + 1)) / 2

    return sumOf_n_naturalNumbers
}

function solutionByPE(target) {
    return divisibleBy(3, target) + divisibleBy(5, target) - divisibleBy(3 * 5, target)
}

/*****************************************************/
