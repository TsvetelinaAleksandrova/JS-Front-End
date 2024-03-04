function solve(numbers) {
    let oddNumbers = numbers.filter(num => num % 2 !== 0);
    let evenNumbers = numbers.filter(num => num % 2 === 0);

    let oddSum = oddNumbers.reduce((a, b) => a + b, 0);
    let evenSum = evenNumbers.reduce((a, b) => a + b, 0);

    console.log(evenSum - oddSum)
}