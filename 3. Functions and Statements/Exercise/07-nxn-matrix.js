function solve(number) {
    const createRow = number => new Array(number).fill(number).join(' ');

    for (let i = 0; i < number; i++) {
        console.log(createRow(number))
    }
}