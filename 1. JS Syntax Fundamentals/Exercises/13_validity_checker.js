function solve(x1, y1, x2, y2) {
    firstDistance = Math.sqrt((0 - x1) ** 2 + (0 - y1) ** 2)
    secondDistance = Math.sqrt((0 - x2) ** 2 + (0 - y2) ** 2)
    thirdDistance = Math.sqrt((x2 - x1) ** 2 + (y2 - y1) ** 2)

    if (Number.isInteger(firstDistance)) {
        console.log(`{${x1}, ${y1}} to {0, 0} is valid`)
    } else {
        console.log(`{${x1}, ${y1}} to {0, 0} is invalid`)
    }

    if (Number.isInteger(secondDistance)) {
        console.log(`{${x2}, ${y2}} to {0, 0} is valid`)
    } else {
        console.log(`{${x2}, ${y2}} to {0, 0} is invalid`)
    }

    if (Number.isInteger(thirdDistance)) {
        console.log(`{${x1}, ${y1}} to {${x2}, ${y2}} is valid`)
    } else {
        console.log(`{${x1}, ${y1}} to {${x2}, ${y2}} is invalid`)
    }
}

solve(3, 0, 0, 4)