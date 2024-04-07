function attachEvents() {
    const messageUrl = 'http://localhost:3030/jsonstore/messenger';

    const submitButton = document.getElementById('submit');
    const refreshButton = document.getElementById('refresh');

    textareaResult = document.querySelector('textarea');

    submitButton.addEventListener('click', sendMessage);
    refreshButton.addEventListener('click', refreshMessage);

    function sendMessage() {
        let author = document.getElementsByName('author')[0].value; 
        let content = document.getElementsByName('content')[0].value; 
    
        let message = {author, content};

        fetch(messageUrl, {
            method: 'POST',
            body: JSON.stringify(message)
        })
    }

    async function refreshMessage() {
        textareaResult.textContent = '';

        let messagesResponse = await fetch(messageUrl);
        let messages = await messagesResponse.json();

        let messagesArr = [];
        for (let messageElement of Object.entries(messages)) {
            let messageObj = messageElement[1];
            messagesArr.push(`${messageObj.author}: ${messageObj.content}`);
        }

        textareaResult.textContent = messagesArr.join('\n')
    }
}

attachEvents();