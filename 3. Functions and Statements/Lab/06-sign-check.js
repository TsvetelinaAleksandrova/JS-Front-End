function solve(a, b, c) {
    const multiply = (a, b) => a * b;

    if (multiply(multiply (a, b), c) > 0) {
        console.log('Positive');
    } else {
        console.log('Negative')
    }
}