const prompt = require('prompt-sync')({ sigint: true })

const enums = new Map([
    ['zero', 0],
    ['one', 1],
    ['two', 2],
    ['Zero', 0],
    ['One', 1],
    ['Two', 2],
    ['plus', '+'],
    ['minus', '-'],
    ['Plus', '+'],
    ['Minus', '-']
])

function wordedMath(expr) {
    const wordsArr = expr.split(' ')
    const numsArr = wordsArr.map(word => {
        return enums.get(word)
    })

    d = {
        '+': (numbersArr) => {
            const nums = numbersArr.filter(item => item !== '+' && true)
            const [number1, number2] = nums
            return number1 + number2
        }, '-': (numbersArr) => {
            const nums = numbersArr.filter(item => item !== '-' && true)
            const [number1, number2] = nums
            return number1 - number2
        }
    }
    let result = d[numsArr[1]](numsArr)
    let strResult = ''
    for (let el of enums.entries()) {
        if (el[1] === result) {
            strResult = el[0]
            break
        }
    }
    const splitted = strResult.split('')
    const first = splitted[0].toUpperCase()
    const rest = [...splitted]
    rest.splice(0, 1)
    const newStrRes = strResult = [first, ...rest].join('')
    return newStrRes
}

const expression = prompt('Enter mathematic expression with plus or minus by string: ')
const wordArr = expression.split(' ')
const isRightWords = wordArr.every(word => enums.has(word))
if(expression && typeof(expression) === 'string' && isRightWords) {
    console.log(wordedMath(expression))
} else {
    console.log('You have written wrong expression!')
}