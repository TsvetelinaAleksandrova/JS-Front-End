function solve(number) {
    const evenSum = calculateDigitSum(number, x => x % 2 === 0);
    const oddSum = calculateDigitSum(number, x => x % 2 !== 0)
    
    printResult(oddSum, evenSum);

    function calculateDigitSum(number, filter) {
        const digits = number
            .toString()
            .split('')
            .map(Number)
            .filter(filter);

        const sum = digits.reduce((acc, digit) => acc + digit, 0);
        return sum;
    }

    function printResult(oddSum, evenSum) {
        console.log(`Odd sum = ${oddSum}, Even sum = ${evenSum}`)
    }
}
