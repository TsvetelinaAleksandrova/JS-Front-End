function solve(number) {
    function findSum(array) {
        return array.reduce(
            (acc, currentNum) => {
                return acc + Number(currentNum)
            }, 0
        )
    }

    let numbersArray = number.toString().split('')
    let averageValue = findSum(numbersArray) / numbersArray.length

    while (averageValue <= 5) {
        numbersArray.push(9)
        averageValue = findSum(numbersArray) / numbersArray.length
    }

    console.log(numbersArray.join(''))
}