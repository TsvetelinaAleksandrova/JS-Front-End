function solve() {
    const inputElements = document.querySelectorAll('input');
    const checkButton = document.querySelectorAll('button')[0];
    const clearButton = document.querySelectorAll('button')[1];

    const tableElement = document.querySelector('table');
    const validateParagraph = document.querySelector('#check p');

    clearButton.addEventListener('click', reset);
    checkButton.addEventListener('click', validateResult)

    function reset() {
        for (let input of inputElements) {
            input.value = '';
            tableElement.style.border = 'none';
            validateParagraph.textContent = '';
        }
    }

    function validateResult() {
        let correctResult = true;
        let allInputs = [
            [inputElements[0].value, inputElements[1].value, inputElements[2].value],
            [inputElements[3].value, inputElements[4].value, inputElements[5].value],
            [inputElements[6].value, inputElements[7].value, inputElements[8].value]
        ];

        for (let i = 0; i < allInputs.length; i++) {
            let row = allInputs[i];
            let col = allInputs.map(row => row[i]);
            let sumRow = 0;
            let sumCol = 0;

            for (let num of row) {
                sumRow += Number(num)
            }
            for (let num of col) {
                sumCol += Number(num)
            }

            if (sumRow != 6 || sumCol != 6) {
                correctResult = false;
                break
            }
        }

        if (correctResult) {
            tableElement.style.border = '2px solid green';
            validateParagraph.style.color = 'green';
            validateParagraph.textContent = 'You solve it! Congratulations!';
        } else {
            tableElement.style.border = '2px solid red';
            validateParagraph.style.color = 'red';
            validateParagraph.textContent = 'NOP! You are not done yet...';
        }
    }
}