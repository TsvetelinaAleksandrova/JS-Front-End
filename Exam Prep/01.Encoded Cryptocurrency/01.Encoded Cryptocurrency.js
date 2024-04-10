function solve (input) {
    let message = input.shift();

    const takeEven = (message) =>{
        let result =  message.split('').filter((char, i) => i % 2 == 0).join('');
        console.log(result);
        return result;
    }

    const changeAll = (message, substring, replacement) =>{
        let result = message;

        while (result.includes(substring)) {
            result = result.replace(substring, replacement)
        }
        console.log(result);
        return result;
    }

    const reverse = (message, substring, replacement) =>{
        if (!message.includes(substring)) {
            console.log('error');
            return message;
        } 
        let result = message.replace(substring, '');
        result += substring.split('').reverse().join('');
        console.log(result);
        return result;
    }
    let line = input.shift();

    while (line !== 'Buy') {
        const [command, substring, replacement] = line.split('?');

        switch (command) {
            case 'TakeEven':
                message = takeEven(message);
                break;
            case 'ChangeAll':
                message = changeAll(message, substring, replacement);
                break;
            case 'Reverse':
                message = reverse(message, substring);
                break;
        }

        line = input.shift();
    }
    console.log(`The cryptocurrency is: ${message}`)
}