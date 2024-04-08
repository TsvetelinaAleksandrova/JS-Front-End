function solve(input) {
    const baristaCount = Number(input.shift());
    const team = {};

    for (let i = 0; i < baristaCount; i++) {
        const [name, shift, coffeeTypes] = input[i].split(' ');

        team[name] = {
            shift,
            coffeeTypes: coffeeTypes.split(','),
        }
    }
    let commandline = input.shift();

    while (commandline != 'Closed') {
        const [command, name, firstArg, secondArg] = commandline.split(' / ');
        const barista = team[name];

        let shift, coffeeType;

        switch (command) {
            case 'Prepare':
                shift = firstArg;
                coffeeType = secondArg;

                if (barista.shift === shift && barista.coffeeTypes.includes(coffeeType)) {
                    console.log(`${name} has prepared a ${coffeeType} for you!`)
                } else {
                    console.log(`${name} is not available to prepare a ${coffeeType}.`)
                }
                break;
            case 'Change Shift':
                shift = firstArg;
                barista.shift = shift;
                console.log(`${name} has updated his shift to: ${shift}`);
                break;
            case 'Learn':
                coffeeType = firstArg;
                if (barista.coffeeTypes.includes(coffeeType)) {
                    console.log(`${name} knows how to make ${coffeeType}.`)
                } else {
                    barista.coffeeTypes.push(coffeeType);
                    console.log(`${name} has learned a new coffee type: ${coffeeType}.`)
                }
                break;
        }

        commandline = input.shift()
    }

    for (const baristaName in team) {
        console.log(`Barista: ${baristaName}, Shift: ${team[baristaName].shift}, Drinks: ${team[baristaName].coffeeTypes.join(', ')}`)
    }
}
