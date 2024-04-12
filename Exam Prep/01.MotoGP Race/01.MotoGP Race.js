function solve(input) {
    const ridersCount = Number(input.shift());
    const allRiders = {};

    for (let i = 0; i < ridersCount; i++) {
        const [name, fuel, position] = input[i].split('|');

        allRiders[name] = {
            fuel: parseFloat(fuel),
            position: parseInt(position),
        }
    }

    let commandLine = input.shift();

    while (commandLine != 'Finish') {
        const [command, name, firstArg, secondArg] = commandLine.split(' - ');
        let rider = allRiders[name];

        switch (command) {
            case 'StopForFuel':
                minFuel = parseFloat(firstArg);
                changedPosition = parseInt(secondArg);

                if (rider && rider.fuel < minFuel) {
                    rider.position = changedPosition;
                    console.log(`${name} stopped to refuel but lost his position, now he is ${changedPosition}.`)
                } else if (rider) {
                    console.log(`${name} does not need to stop for fuel!`)
                }
                break;
            case 'Overtaking':
                let name2 = firstArg;
                if (rider && allRiders[name2] && allRiders[name].position < allRiders[name2].position) {
                    [allRiders[name].position, allRiders[name2].position] = [allRiders[name2].position, allRiders[name].position];
                    console.log(`${name} overtook ${name2}!`);
                  }
                break;
            case 'EngineFail':
                let lapsLeft = firstArg;
                if (rider) {
                    console.log(`${name} is out of the race because of a technical issue, ${lapsLeft} laps before the finish.`);
                    delete allRiders[name];
                }
                break;
        }
        commandLine = input.shift();
    }

    function printFinalPosition(riderName) {
        console.log(`${riderName}`);
        console.log(`  Final position: ${allRiders[riderName].position}`);
        delete allRiders[riderName];
      }

    for (let riderName in allRiders) {
        printFinalPosition(riderName);
    }
}

solve(["4",
"Valentino Rossi|100|1",
"Marc Marquez|90|3",
"Jorge Lorenzo|80|4",
"Johann Zarco|80|2",
"StopForFuel - Johann Zarco - 90 - 5",
"Overtaking - Marc Marquez - Jorge Lorenzo",
"EngineFail - Marc Marquez - 10",
"Finish"])

