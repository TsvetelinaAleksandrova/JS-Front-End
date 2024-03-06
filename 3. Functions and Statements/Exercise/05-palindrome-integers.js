function solve(numbers) {
    numbers.forEach(number => console.log(isPalindrome(number)))

    function isPalindrome(number) {
        const forwardNumber = number.toString();
        const backwardNumber = forwardNumber.split('').reverse().join('');

        return forwardNumber === backwardNumber;
    }
}