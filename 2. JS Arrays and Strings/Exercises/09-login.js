function solve(input) {
    const username = input.shift();
    logged = false;

    const correctPassword = (
        username.split('')
        .reverse()
        .join('')
    );
    
    for (let i = 0; i < input.length; i++) {
        if (input[i] == correctPassword) {
            logged = true;
            return console.log(`User ${username} logged in.`)
        }

        if (i === 3) {
            console.log(`User ${username} blocked!`)
        } else {
            console.log('Incorrect password. Try again.')
        }
    }
}
solve(['sunny','rainy','cloudy','sunny','not sunny']);