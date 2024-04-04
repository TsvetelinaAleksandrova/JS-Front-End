function encodeAndDecodeMessages() {
    let firstTextArea = Array.from(document.querySelectorAll('textarea'))[0]
    let encodeButton = Array.from(document.querySelectorAll('button'))[0]
    encodeButton.addEventListener('click', encodeMessage)

    let secondTextArea = Array.from(document.querySelectorAll('textarea'))[1]
    let decodeButton = Array.from(document.querySelectorAll('button'))[1]
    decodeButton.addEventListener('click', decodeMessage)

    function encodeMessage(event) {
        let firstMessage = firstTextArea.value

        let encodedMessage = ''

        for (let symbol of firstMessage) {
            let asciiCodeSymbol = symbol.charCodeAt(0)
            let newSymbol = String.fromCharCode(asciiCodeSymbol + 1)
            encodedMessage += newSymbol
        }

        secondTextArea.value = encodedMessage
        firstTextArea.value = ''
    }

    function decodeMessage(event) {
        let secondMessage = secondTextArea.value

        let decodedMessage = ''

        for (let symbol of secondMessage) {
            let asciiCodeSymbol = symbol.charCodeAt(0)
            let newSymbol = String.fromCharCode(asciiCodeSymbol - 1)
            decodedMessage += newSymbol
        }

        secondTextArea.value = decodedMessage
    }
    
}