function solve(input) {
    const charatersCount = Number(input.shift());
    const posse = {};

    for (let i = 0; i < charatersCount; i++) {
        const [name, hp, bullets] = input[i].split(' ');
        posse[name] = {
            hp: Number(hp),
            bullets: Number(bullets),
        }
    }

    let commandLine = input.shift();

    while (commandLine != 'Ride Off Into Sunset') {
        const [command, name, firstArg, secondArg] = commandLine.split(' - ');
        const hero = posse[name];

        switch (command) {
            case 'FireShot':
                let target = firstArg;
                if (hero.bullets > 0) {
                    hero.bullets -= 1;
                    console.log(`${name} has successfully hit ${target} and now has ${hero.bullets} bullets!`)
                } else {
                    console.log(`${name} doesn't have enough bullets to shoot at ${target}!`)
                }
                break;
            
            case 'TakeHit':
                let damage = Number(firstArg);
                let attacker = secondArg;
                hero.hp -= damage;
                if (hero.hp > 0) {
                    console.log(`${name} took a hit for ${damage} HP from ${attacker} and now has ${hero.hp} HP!`)
                } else {
                    delete posse[name];
                    console.log(`${name} was gunned down by ${attacker}!`)
                }
                break;
            
            case 'Reload': 
                let maxBullets = 6;
                if (hero.bullets < maxBullets) {
                    initialBullets = hero.bullets;
                    hero.bullets = maxBullets;
                    console.log(`${name} reloaded ${maxBullets - initialBullets} bullets!`) 
                } else {
                    console.log(`${name}'s pistol is fully loaded!`)
                }
                break;

            case 'PatchUp':
                let amount = Number(firstArg);
                let maxHp = 100;
                
                if (hero.hp === 100) {
                    console.log(`${name} is in full health!`)
                    break;
                } else {
                    initialHp = hero.hp;
                    hero.hp += amount;
                }
                if (hero.hp > maxHp) {
                    hero.hp = maxHp;
                }
                console.log(`${name} patched up and recovered ${hero.hp - initialHp} HP!`);
                break;
        }

        commandLine = input.shift()
    }

    for (let [key, value] of Object.entries(posse)) {
        console.log(`${key}\n  HP: ${value.hp}\n  Bullets: ${value.bullets}`);
    }
}
solve(["2",
"Gus 50 4",
"Walt 100 5",
"FireShot - Gus - Bandit",
"TakeHit - Walt - 100 - Bandit",
"Reload - Gus",
"PatchUp - Gus - 20" ,
"PatchUp - Gus - 100", 
"Ride Off Into Sunset"])
