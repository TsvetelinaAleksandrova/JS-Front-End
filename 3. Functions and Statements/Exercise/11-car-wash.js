function solve(commands) {
    let cleanPercentage = 0

    let possibleCommands = {
        'soap': (value) => value + 10,
        'water': (value) => value * 1.2,
        'vacuum cleaner': (value) => value * 1.25,
        'mud': (value) => value * 0.9
    }

    for (let command of commands) {
        cleanPercentage = possibleCommands[command](cleanPercentage)
    }

    console.log(`The car is ${cleanPercentage.toFixed(2)}% clean.`)
}
