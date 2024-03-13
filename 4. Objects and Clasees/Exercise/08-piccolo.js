function solve(input) {
    const parking = new Set();

    for (const row of input) {
        const [direction, carNumber] = row.split(', ');

        direction === "IN"
            ? parking.add(carNumber)
            : parking.delete(carNumber)
    }

    if (parking.size < 1) {
        return console.log('Parking Lot is Empty')
    }
    Array.from(parking.values())
        .sort((a, b) => a.localeCompare(b))
        .forEach(car => console.log(car));
}

