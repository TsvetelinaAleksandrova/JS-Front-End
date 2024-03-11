function solve(input) {
    const phonebook = [];

    for (const line of input) {
        const [name, phone] = line.split(' ')

        phonebook[name] = phone;
    }

    for (const name in phonebook) {
        console.log(`${name} -> ${phonebook[name]}`)
    }
}