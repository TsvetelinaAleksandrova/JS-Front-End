function solve(input) {
    const words = input
        .shift()
        .split(' ')
        .reduce((result, word) => {
            result[word] = 0;
            return result
        }, {});

    for (const word of input) {
        if (words.hasOwnProperty(word)) {
            words[word] += 1;
        }
    }
    
    Object.entries(words)
        .sort((a, b) => b[1] - a[1])
        .forEach(([word, occurances]) => console.log(`${word} - ${occurances}`))
}